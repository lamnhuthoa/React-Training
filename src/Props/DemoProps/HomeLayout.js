import React, { Component } from 'react'

import Footer from './Footer.js';
import ProductDemo from './ProductDemo.js';
import CardProduct from './CardProduct.js';

export default class HomeLayout extends Component {

    arrProduct = [
        {id: 1, name: 'iPhone', price: 1000, img: 'https://picsum.photos/id/1/1000/1000'},
        {id: 2, name: 'iPhone X', price: 2000, img: 'https://picsum.photos/id/2/1000/1000'},
        {id: 3, name: 'iPhone XS', price: 3000, img: 'https://picsum.photos/id/3/1000/1000'}
    ]

    render() {
        return (
            <div className="container">
                <h3>Home Layout</h3>
                <input type="text" />
                <Footer bgColor="rgba(87, 24, 69)" content="FrontEnd"/>
                <Footer bgColor="rgba(144, 12, 62)" content="BackEnd"/>
                <Footer bgColor="rgba(199, 0, 57)" content="FullStack"/>
                <Footer bgColor="rgba(255, 87, 51)" content="CyberSoft"/>
                <hr/>
                <h3>Product</h3>
                <div className="row">
                    <div className="col-4"> //props trong rcc
                        <ProductDemo product={this.arrProduct[0]}/>
                    </div>
                    <div className="col-4"> //props trong rcc
                        <ProductDemo product={this.arrProduct[1]}/>
                    </div>
                    <div className="col-4"> //props trong rfc
                        <CardProduct product={this.arrProduct[2]}/>
                    </div>
                </div>
            </div>
        )
    }
}
