import React, {Component} from 'react';
import './App.scss';
import Result from './Components/Search/Result'
import Modal from './Components/Modal/Modal'
import Logo from './Assets/8EC1Tv3o.png'
import Buscar from './Assets/Q9icSYQ3.png' 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      result: false,
      inputValue : false,
    }
  }

  openModal=(item)=>{
    this.setState({
      ...this.state,
      modal: item,
      result: false,
      inputValue: false,
    })
  }
  closeModal=()=>{
    this.setState({
      ...this.state,
      modal:false,
      result: true,
      
    })
  }

  handleSearch = (e) =>{
    let conditionSearch = document.getElementById("search-imput").value    
    this.setState({
        inputValue: conditionSearch,
        result: true,
        modal:false,
        
    })

  }
  render(){
  return (
    <div className="App">
        <div className="Navbar">
        <img src={Logo} alt="logo" className="Logo"/>
        <div className="Searcher">
            <input className="Searcher Inside" id="search-imput" type="search" placeholder="Nunca dejes de buscar"></input>
            <button className="Searcher" onClick={this.handleSearch}> <img src={Buscar} alt="lupa"/></button>
        </div>
    </div>
    { this.state.modal && 
      <Modal close={this.closeModal} item={this.state.modal}/>
    }
    { this.state.result && 
       <Result open={this.openModal} data={this.state.inputValue}/>
    }   
    </div>
  );
}
}

export default App;
