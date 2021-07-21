import React, { Component } from 'react';
import SanPham from './SanPham.js';

export default class BaiTapXemChiTiet extends Component {

    mangDienThoai = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderSanPham = () => {
        return this.mangDienThoai.map((product, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPham sp={product} xemChiTiet={this.xemChiTiet}/>
                </div>
            )
        });
    }

    xemChiTiet = (productClick) => {
        console.log(productClick);

        //set lại state khi click
        this.setState({
            sanPhamChiTiet: productClick
        })
    }

    state = {
        sanPhamChiTiet: {
            "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"
        }
    }

    render() {
        let {sanPhamChiTiet} = this.state; //Bóc tách phần tử
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-5">
                    <div className="col-4">
                        <h3 className="text-center">{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} alt="..." height="350" />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{sanPhamChiTiet.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{sanPhamChiTiet.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{sanPhamChiTiet.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{sanPhamChiTiet.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>RAM</th>
                                    <th>{sanPhamChiTiet.ram}</th>
                                </tr>
                                <tr>
                                    <th>ROM</th>
                                    <th>{sanPhamChiTiet.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

//1. Dàn layout (chia component và css)
//2. Xác định state (Là dữ liệu thay đổi trên giao diện khi người dùng thao tác). Xác định kiểu dữ liệu của state? (number? string? boolean? array? object?)
//3. Quy tắc xác định state (state sẽ đặt tại component nào?) thỏa điều kiện:
    //3.1. Chứa giao diện thay đổi (để binding state) trực tiếp hoặc gián tiếp
    //3.2. Chứa cả nút xử lý làm thay đổi state trực tiếp hoặc gián tiếp

//4. setState để thay đổi giao diện