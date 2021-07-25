import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart'

export default class ProductList extends Component {

    renderProductList = () => {
        let {mangSanPham, themGioHang} = this.props;
        return mangSanPham.map((product, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItemCart item={product} themGioHang={themGioHang}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProductList()}
            </div>
        )
    }
}
