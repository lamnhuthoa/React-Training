import React, { Component } from 'react'

export default class Databinding extends Component {

    name = "Hoa"
    img = "https://picsum.photos/200/200"

    renderCard = () => {
        let product = {
            id: 1,
            name: 'iPhone',
            price: 1000,
            img: 'https://picsum.photos/200/300'
        }

        return (
            <div className="card">
                <img src={product.img} alt="" />
                <div className="card-body">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button className="btn btn-success">Mua hàng</button>
                </div>
            </div>
        )
    }

    render() {
        //Khai báo biến, hàm (khai báo var let const và được khai báo trong hàm và phương thức render)
        let tenHocVien = "Hoa";

        return (
            <div className="container">
                <div id="content">{tenHocVien}</div>
                <div id="content">{this.name}</div>
                <div className="card w-25">
                    <img src={this.img} alt="" />
                </div>
                {this.renderCard()};
            </div>
        )
    }
}
