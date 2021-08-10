import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {

    renderSinhVien = () => {
        const {mangSinhVien} = this.props;
        return mangSinhVien.map((sinhVien, index) => {
            return <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.hoTen}</td>
                <td>{sinhVien.soDienThoai}</td>
                <td>{sinhVien.email}</td>
                <td>
                    <button className="btn btn-outline-danger mr-2" onClick={() => {
                        const action = {
                            type: 'XOA_SINH_VIEN',
                            maSV: sinhVien.maSV
                        }
                        this.props.dispatch(action)
                    }}>Xóa</button>
                    <button className="btn btn-outline-primary" onClick={() => {
                        const action = {
                            type: 'CHINH_SUA',
                            sinhVienChinhSua: sinhVien
                        }
                        this.props.dispatch(action)
                    }}>Chỉnh sửa</button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Mã SV</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>

        )
    }
}


const mapStateToProps = state => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps, null)(TableSinhVien)