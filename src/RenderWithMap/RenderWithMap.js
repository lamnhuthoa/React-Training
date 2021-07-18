import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'iPhone', price: 1000, img: 'https://picsum.photos/id/1/1000/1000' },
        { id: 2, name: 'iPhone X', price: 2000, img: 'https://picsum.photos/id/2/1000/1000' },
        { id: 3, name: 'iPhone XS', price: 3000, img: 'https://picsum.photos/id/3/1000/1000' }
    ]

    renderProduct = () => {
        // Cách 1:
        // let content = [];
        // for (let i = 0; i < this.arrProduct.length; i++) {
        //     //Mỗi lần duyệt lấy ra 1 đối tượng 
        //     let product = this.arrProduct[i];
        //     //Từ đối tượng product sẽ tạo ra một tag jsx
        //     let tagTr = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td><img width={50} height={50} src={product.img} alt="..."/></td>
        //         <td>${product.price}</td>
        //         <td></td>
        //     </tr>;

        //     content.push(tagTr);
        // }
        // return content;

        //Cách 2: Sử dụng Map
        let content = this.arrProduct.map((product, index) => {
            return <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img width={50} height={50} src={product.img} alt="..." /></td>
                <td>${product.price}</td>
                <td></td>
            </tr>
        });

        return content;
    }

    renderProductCard = () => {
        let content = this.arrProduct.map((product, index) => {
            return <div className="col-4">
                <div className="card">
                    <img src={product.img} alt="..." />
                    <div className="card-body">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        });
        return content;
    }

    render() {
        return (
            <div className="container">
                <h3>Product List dạng table</h3>
                <table className="table">
                    <thead className="bg-dark text-white text-center">
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {this.renderProduct()}
                    </tbody>
                </table>

                <hr />
                <h3>Product List dạng card</h3>
                <div className="row">
                    {this.renderProductCard()}
                </div>

            </div>
        )
    }
}
