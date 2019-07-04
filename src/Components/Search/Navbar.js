import React, {Component} from 'react';
import './Navbar.scss';
import logo from '../../Assets/8EC1Tv3o.png'


class Navbar extends Component {
    constructor(){
    super ()
    this.state={
        inputValue : false,
    }
  }

  handleSearch = (e) =>{
    let conditionSearch = document.getElementById("search-imput").value
    
    this.setState({
        inputValue: conditionSearch,
    })

  }

  render (){
  return (
    <div className="Navbar">
        <img src={logo} alt="logo" className="Logo"/>
        <div className="Searcher">
            <input className="Searcher Inside" id="search-imput" type="search" placeholder="Nunca dejes de buscar"></input>
            <button className="Searcher" onClick={this.handleSearch}> Buscar</button>
        </div>
    </div>
  );
}
}

export default Navbar;