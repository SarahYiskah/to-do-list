import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <List />
      </Provider>
    );
  }
}

export default App;
