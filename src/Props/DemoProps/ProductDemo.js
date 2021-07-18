import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {

        let {product} = this.props;

        return (
            <div className="card">
                <img src={product.img} alt="..."/>
                <div className="card-body">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}

/**
 * Phân biệt giữa State và Props
 * + Giống nhau: Cả hai đều là thuộc tính có sẵn của RCC để binding dữ liệu hiển thị lên giao diện
 * + Khác nhau:
 *      this.state: dùng để chứa các giá trị thay đổi trên giao diện và có thể gán lại được thông qua
 *                  phương thức setState
 *      this.props: dùng để nhận giá trị từ component cha (nơi sử dụng thẻ đó) truyền vào. Và lưu ý,
 *                  không thể gán lại giá trị đó
 */
