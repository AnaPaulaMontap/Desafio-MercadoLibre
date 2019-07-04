import React, {Component} from 'react';
import './App.scss';
import Navbar from './Components/Search/Navbar'
import Result from './Components/Search/Result'
import Modal from './Components/Modal/Modal'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      topScroll: false,
      result: true,
      screen: window.screen.height
    }
  }

  openModal=(item)=>{
    this.setState({
      ...this.state,
      modal: item,
      result: false,
    })
  }
  closeModal=()=>{
    this.setState({
      ...this.state,
      modal:false,
      result: true,
    })
  }
  render(){
  return (
    <div className="App">
    <Navbar/>
    { this.state.modal && 
      <Modal close={this.closeModal} item={this.state.modal}/>
    }
    { this.state.result && 
       <Result open={this.openModal}/>
    }
   
    </div>
  );
}
}

export default App;
