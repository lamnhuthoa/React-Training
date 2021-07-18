import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        
        let {product} = this.props

        return (
            <div className="card">
                <img src={product.image} alt="..." />
                <div className="card-body">
                    <h4 style={{height: '50px'}}>{product.name}</h4>
                    <span>${product.price}</span>
                    <br/>
                    <button className="p-2"style={{ border: 'none', background: '#000', color: '#fff'}}>
                        <span>Add to cart <i class="fas fa-shopping-cart"></i></span>
                    </button>
                </div>
            </div>
        )
    }
}
