import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            price:0,
            imgurl: ''
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
            imgurl: img
        })
    }
    
    //handleCancel
    handleCancel=()=>{
        this.setState({
            name: '',
            price: '',
            imgurl: ''
        })
        // console.log(this.state)
    }
    

    render(){
        return (
        <div>
            <input placeholder= "name" onChange={(e)=> this.handleInputName(e.target.value)} value={this.state.name}/>
            <input placeholder= "price" onChange={(e)=> this.handleInputPrice(e.target.value)} value={this.state.price}/>
            <input placeholder= "image_url" onChange={(e)=> this.handleImage(e.target.value)} value={this.state.imgurl}/>
            <button>Add Inventory</button>
            <button onClick={()=> this.handleCancel()}>Cancel</button>

        {/* <h1>Form</h1> */}
        </div>
        )
    }   
} 

export default Form;