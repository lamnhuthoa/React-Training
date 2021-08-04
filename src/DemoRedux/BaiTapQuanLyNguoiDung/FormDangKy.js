import React, { Component } from 'react'
import {connect} from 'react-redux'

class FormDangKy extends Component {

    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDienThoai: '',
            maLoaiNguoiDung: '',
        },
        errors : {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDienThoai: '',
            maLoaiNguoiDung: '',
        }

    }

    handleChangeInput = (event) => {
        let { value, name } = event.target;

        let newValues = {...this.state.values}
        newValues[name] = value;

        let attrValue = '';
        let regex;
        if (event.target.getAttribute('typeEmail'))
        {
            attrValue = event.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        }

        let newErrors = {...this.state.errors}
        let messageError = '';
        if(value.trim() === ''){
            messageError = name + ' không được bỏ trống!'
        }
        
        //Nếu là email
        if(regex){
            if(attrValue === 'email'){
                if(!regex.test(value)){
                    messageError = name + ' phải đúng định dạng!' //email + 'không đúng định dạng'
                }
            }
        }

        newErrors[name] = messageError;

        this.setState({
            values: newValues,
            errors: newErrors,
        });
    }

    handleSubmit = (event) => {
        //Cản sự kiện submit browser
        event.preventDefault();
        console.log('state', this.state)

        let valid = true;
        //Duyệt bắt error phải bằng rỗng hết mới hợp lệ
        for (let key in this.state.errors){
            if(this.state.errors[key] !== ''){
                valid = false;
                break;
            }
        }

        //Duyệt bắt tất cả value phải khác rỗng mới hợp lệ
        for(let key in this.state.values){
            if(this.state.values[key] === ''){
                valid = false;
                break;
            }
        }
        if(!valid){//Không hợp lệ
            alert('Dữ liệu không hợp lệ')
            return;
        }
        //submit lên redux tại đây khi tất cả hợp lệ
        const action = {
            type: 'TEN_NGUOI_DUNG',
            nguoiDung: this.state.values
        }

        this.props.dispatch(action)
    }

    render() {
        return (
            <form className="card mt-5" onSubmit={this.handleSubmit}>
                <div className="card-header bg-dark text-white">Form đăng ký</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <p>Tài khoản</p>
                                <input className="form-control" name="taiKhoan" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.errors.taiKhoan}</p>
                            </div>
                            <div className="form-group">
                                <p>Mật khẩu</p>
                                <input className="form-control" name="matKhau" type="password" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.errors.matKhau}</p>
                            </div>
                            <div className="form-group">
                                <p>Email</p>
                                <input className="form-control" name="email" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <p>Họ tên</p>
                                <input className="form-control" name="hoTen" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.errors.hoTen}</p>
                            </div>
                            <div className="form-group">
                                <p>Số điện thoại</p>
                                <input className="form-control" name="soDienThoai" onChange={this.handleChangeInput}></input>
                                <p className="text-danger">{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className="form-group">
                                <p>Mã loại người dùng</p>
                                <select className="form-control" name="maLoaiNguoiDung" onChange={this.handleChangeInput}>
                                    <option value="KhachHang">Khách hàng</option>
                                    <option value="QuanTri">Quản trị</option>
                                </select>
                                <p className="text-danger">{this.state.errors.maLoaiNguoiDung}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-left">
                    <button className="btn btn-outline-success mr-2" type="submit" onClick={() => {
                        const action = {
                            type: 'THEM_NGUOI_DUNG',
                            
                        }
                        this.props.dispatch(action)
                    }}>Đăng ký</button>
                    <button className="btn btn-outline-primary">Cập nhật</button>
                </div>
            </form>
        )
    }
}

export default connect()(FormDangKy)