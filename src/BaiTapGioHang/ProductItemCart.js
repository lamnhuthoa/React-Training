import React, { Component } from 'react'

export default class ProductItemCart extends Component {
    render() {
        let {item, themGioHang} = this.props;
        return (
            <div className="card">
                <img style={{height: 350}} src={item.hinhAnh} alt="..."></img>
                <div className="card-body">
                    <h3>{item.tenSP}</h3>
                    <p>{item.giaBan.toLocaleString()} đ</p>
                    <button className="btn btn-success mr-2">Xem chi tiết</button>
                    <button className="btn btn-danger" onClick={() => {themGioHang(item)}}>Thêm giỏ hàng</button> {/*Click vào gọi lại hàm themGioHang (BaiTapGioHang)*/}
                </div>
            </div>
        )
    }
}
