import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

export default class ExerciseCarStore extends Component {

    products = [
        { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
        { id: 3, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
    ];

    state = {
        productDetail: {id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000}
    }

    //setState định nghĩa tại component chứa state
    viewDetail = (itemClick) => {
        this.setState({
            productDetail: itemClick
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <ProductList productsData={this.products} viewDetail={this.viewDetail}/>
                <Modal productDetail={this.state.productDetail}/>
            </div>
        )
    }
}
