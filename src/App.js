import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
       
      Frontend Dashboard
      </header>
    </Provider>
  );
}

export default App;
