import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client/lib/index';
import gql from 'graphql-tag';


export default class Client {
  constructor(serverPath, token) {
    this.path = `${serverPath}/graphql`
    this.token = token

    this.client = new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors) {
            graphQLErrors.forEach(({ message, locations, path }) => {
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`,
              );
            });
          }
          if (networkError) {
            console.log(`[Network error]: ${networkError}`);
          }
        }),
        createUploadLink({
          uri: this.path,
          credentials: 'same-origin',
          headers: { authorization: this.token },
        }),
      ]),
      cache: new InMemoryCache(),
    })
  }

  mutate$(query, variables = {}) {
    return this.client.mutate({
      query: gql`${query}`,
      variables
    })
  }

  query$(query, variables = {}) {
    return this.client.query({
      query: gql`${query}`,
      variables
    })
  }
}
