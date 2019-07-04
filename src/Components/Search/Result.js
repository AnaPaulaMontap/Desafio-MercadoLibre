import React, {Component} from 'react';
import './Navbar.scss';


class Result extends Component {
    constructor(){
    super ()
    this.state={
        results : [],
        categories: [],
        categoriesSort: [],
    }
  }

  componentDidMount = () =>{
    fetch('https://api.mercadolibre.com/sites/MLC/search?q=mac')
    .then(response=> response.json())
    .then( (data)=>{
        let resultsData = data.results;
        let arrData =[];

        for (let i=0; i <4; i++){
           arrData.push(resultsData[i])
        };

       this.setState({
           results: arrData,
           categories: data.available_filters[0].values
       });

       this.handleSort();
    })
        
  }  

  handleSort = () =>{
    const resultOrden= this.state.categories.sort((a, b) => {
        if (a.results < b.results) {
          return 1;
        }
        else if (a.results > b.results) {
          return -1;
        }
        else{
            return 0;
        }        
    })

    fetch(`https://api.mercadolibre.com/categories/${resultOrden[0].id}`)
    .then(response => response.json())
    .then((data)=>{

      this.setState({
        ...this.state,
        categoriesSort: data.path_from_root
      })
    })

    
   

  }

  render (){
    const cardsResults =  this.state.results.map(item =>{          
        return (
            <div key={item.id} className="card" onClick={()=>this.props.open(item.id)}>
             <img src={item.thumbnail} alt={item.id} className="imageCard"/>
                <div className="infoCard">
                    <p className="Price"> $ {item.price.toLocaleString()}</p>
                    <p >{item.title}</p>
                </div>
                <div  className="cityCard">
                    <p>{item.address.city_name}</p>
                </div>
            
            </div>
        )
          });
    
      const breadcrumb__path = this.state.categoriesSort.map((item)=>{
        return(
          <div className="breadcrumb">
           <span> &nbsp;>&nbsp;</span> <span key={item.id}>{item.name}</span> 
          </div>

          )
      });

  return (
      <div className="Results">
        <div className="breadcrumbItem">
            {breadcrumb__path}
        </div>
        {cardsResults}
      </div>
  );
}
}

export default Result;