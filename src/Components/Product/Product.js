import React, {Component} from 'react'

class Product extends Component {
    render(){
        let {name, price, image_url} =this.props.inventory
            return(
        <div>     
            <h1>Product</h1>
            <h3>{name}</h3>
            <h3>{price}</h3>
            <img src={image_url} alt="shoes"/>
        </div>
        )
    }
} 

export default Product;