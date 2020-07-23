import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import store from './redux/store';
import './styles/App.css';
import { routesArray } from './routes';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        Frontend Dashboard
      </header>
      <Switch>
        {routesArray.map(item =>
          <Route key={item.path} exact {...item} />
        )}
      </Switch>
    </Provider>
  );
}

export default App;
