import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            price:0,
            image_url: ''
        }
    }
    //handleInputName
    handleInputName=(val)=>{
        this.setState({
            name: val
        })
        // console.log(this.state)
    }

    //handleInputPrice
    handleInputPrice=(price)=>{
        this.setState({
            price: price
        })
    }
    
    //handleImage
    handleImage=(img)=>{
        this.setState({
            image_url: img
        })
    }
    
    //handleCancel
    handleCancel=()=>{
        this.setState({
            name: '',
            price: '',
            image_url: ''
        })
        // console.log(this.state)
    }
    
    handleCreateShoe = ()=>{
        const {name, price, image_url} =this.state
        const newShoe = {
            name,
            price,
            image_url
        }
        axios.post('/api/inventory', newShoe).then(
            res=> {this.props.getInventory(res.data)
                   this.handleCancel() 
                    }).catch(error => {
                        console.log(error)
                    })
    }

    render(){
        return (
        <div>
            <input placeholder= "name" onChange={(e)=> this.handleInputName(e.target.value)} value={this.state.name}/>
            <input placeholder= "price" onChange={(e)=> this.handleInputPrice(e.target.value)} value={this.state.price}/>
            <input placeholder= "image_url" onChange={(e)=> this.handleImage(e.target.value)} value={this.state.image_url}/>
            <button onClick={this.handleCreateShoe}>Add Inventory</button>
            <button onClick={()=> this.handleCancel()}>Cancel</button>

        {/* <h1>Form</h1> */}
        </div>
        )
    }   
} 

export default Form;