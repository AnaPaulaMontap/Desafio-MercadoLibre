import React, {Component} from 'react';
import './Modal.scss'


class Modal extends Component {
    constructor(props){
      super(props);
      this.state = {
          products: false,
          description:false,
        
      }
    }
    componentDidMount = ()=>{
        fetch(`https://api.mercadolibre.com/items/${this.props.item}`)
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                ...this.state,
                products: data
            })
        })

        fetch(`https://api.mercadolibre.com/items/${this.props.item}/descriptions`)
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                ...this.state,
                description: data[0].plain_text
            },()=>{
                console.log(this.state.description)
            })
        })


    }   

    render(){    
        let img = this.state.products ? (this.state.products.pictures[0].url):null;
        let state = this.state.products ? (this.state.products.condition):null;
        let sale = this.state.products ? (this.state.products.sold_quantity):null;
        let name = this.state.products ? (this.state.products.title):null;
        let price = this.state.products ? (this.state.products.price.toLocaleString()):null;
        let description = this.state.description ? (this.state.description):null;

   return ( 
   <div className="divOutside" onClick={(e)=>{
       if ( e.target.getAttribute("class")==="divOutside"){
           this.props.close()
       }
   }}>
        <div className="divInside">  
        <div className="divImg">      
            <img src={img} alt="Imagen producto" className="imgModal"/> 
        </div>
        <div className="divText">
            <span className="infoSold">{state}</span> <span className="infoSold"> - {sale} vendidos</span>
            <h2 className="title">{name}</h2>
            <p className="price">${price}</p>
            <div>
                <button className="buy">Comprar</button>
        </div>
        </div>
        <div className="divDescription">
            <p className="titleDescription">Descripcion del Producto</p>
            <p>{description}</p>
        </div>
        </div>
    </div>
    )
}

}

export default Modal