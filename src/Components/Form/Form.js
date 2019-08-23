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

    render(){
        return (
        <div>
            <input placeholder= "name"></input>
            <input placeholder= "price"></input>
            <input placeholder= "image_url"></input>
            <button>Add Inventory</button>
            <button>Cancel Inventory</button>

        {/* <h1>Form</h1> */}
        </div>
        )
    }   
} 

export default Form;