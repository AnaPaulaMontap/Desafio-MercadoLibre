import React, { Component } from 'react';
import { BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import App from './App';
import Result from './Components/Search/Result'
import Modal from './Components/Modal/Modal'



class Routes extends Component {
  render() {
    return (
      <BrowserRouter>                
          <Switch>           
            <Route 
              path="/"
              render={() => <App/>} />
            <Route
              path="/Items"
              render={() => <Result/>}/> 
            <Route
              path="/Items/:id"
              render={() => <Modal/>}/> 
                               
           <Redirect path="*" to="/"></Redirect>       
          </Switch>
       
      </BrowserRouter>
    );
  }
}

export default Routes;