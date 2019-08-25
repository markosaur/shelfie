import React, {Component} from 'react'

import Product from '../Product/Product'
// import App from '../../App'

class Dashboard extends Component {
    render(){
        const mappedShoes = this.props.inventory.map((inv, i)=>{ 
            return( < Product inventory={inv} inv= {inv.id} key = {i} />)
    }) 
        return( 
                <div>
                    {mappedShoes}
                    {/* let{name,price, imgurl} =this.props.inventory */}
                {/* const mappedProduct = this.props.inventory.map((inv) => {
                    return(<Product key={inv.id} />)
                }) */}
                <h1>Dashboard</h1>
                </div>
            )
        }
} 

export default Dashboard;