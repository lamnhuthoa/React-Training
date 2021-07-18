import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProductList = () => {
        return this.props.arrProduct.map((product, index) => {
            return <div className="col-4 mt-3" key={index}>
                <ProductItem product={product} />
            </div>
        });
    }

    render() {

        return (
            <div className="container">
                <h3 className="text-center">Sneaker Shop</h3>
                <div class="row">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
