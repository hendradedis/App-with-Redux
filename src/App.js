import React, { Component } from 'react';
import NavBar from './pages/navBar';
import FormName from './pages/FormName';
import MessageList from './pages/MessageList';
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <NavBar/>
          <br/>
            <div className="container">
             <FormName/>
          <br/>
            <MessageList/>
        </div>  
      </div>
      </Provider>
    );
  }
}

export default App;
