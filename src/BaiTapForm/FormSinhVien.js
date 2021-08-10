import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSinhVien extends Component {

    state = {
        values: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai:''
        },
        errors: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai:''
        }
    }

    handleChange = (e) => {
        //Lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let {name, value} = e.target;

        let attrValue = '';
        let regex;
        if(e.target.getAttribute('typeEmail')){
            attrValue = e.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        }

        let errorMessage = '';

        //Kiểm tra rỗng
        if(value.trim() === ''){ //Kiểm tra bất kỳ control input nào người dùng nhập vào đều kiểm tra rỗng
            errorMessage = name + ' không được bỏ trống!'  
        }

        //Nếu là email
        if(regex){
            if(attrValue === 'email') {
                if(!regex.test(value)){
                    errorMessage = name + ' phải đúng định dạng!';
                }
            }
        }

        let newValues = {...this.props.sinhVien.values};
        newValues[name] = value;

        let newErrors = {...this.props.sinhVien.errors};
        newErrors[name] = errorMessage;

        // this.setState({
        //     values: newValues,
        //     errors: newErrors
        // });
        
        this.props.dispatch({
            type: 'HANDLE_CHANGE_INPUT',
            sinhVien: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); //Cản sự kiện reload lại trang của browser
        let valid = true;
        for(let key in this.props.sinhVien.errors){
            if(this.props.sinhVien.errors[key] !== ''){
                valid = false;
                break;
            }
        }

        //Duyệt bắt tất cả value phải khác rỗng mới hợp lệ
        for(let key in this.props.sinhVien.values){
            if(this.props.sinhVien.values[key] === ''){
                valid = false;
                break;
            }
        }

        if(!valid){ //Không hợp lệ
            alert('Dữ liệu không hợp lệ')
            return;
        }

        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien: this.props.sinhVien.values
        }
        this.props.dispatch(action)
    }

    render() {
        let {maSV, hoTen, email, soDienThoai} = this.props.sinhVien.values;
        return (
            <div className="container">
                <div className="card text-left">
                    <div className="card-header bg-dark text-white"><h3>Thông tin sinh viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã SV</span>
                                    <input className="form-control" name="maSV" value={maSV} onChange={this.handleChange}></input>
                                    <p className="text-danger">{this.state.errors.maSV}</p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Họ tên</span>
                                    <input className="form-control" name="hoTen" value={hoTen} onChange={this.handleChange}></input>
                                    <p className="text-danger">{this.state.errors.hoTen}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input typeEmail="email" className="form-control" name="email" value={email} onChange={this.handleChange}></input>
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Số điện thoại</span>
                                    <input className="form-control" type="number" name="soDienThoai" value={soDienThoai} onChange={this.handleChange}></input>
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-left">
                                    <button type="submit" className="btn btn-success mr-2">Thêm sinh viên</button>
                                    <button type="button" onClick={() => {
                                        //Cập nhật dữ liệu
                                        const action = {
                                            type: 'CAP_NHAT_SINH_VIEN',
                                            sinhVienCapNhat: this.props.sinhVien.values
                                        }
                                        this.props.dispatch(action)
                                    }} className="btn btn-primary">Cập nhật</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        sinhVienChinhSua: state.QuanLySinhVienReducer.sinhVienChinhSua,
        sinhVien: state.QuanLySinhVienReducer.sinhVien
    }
}

export default connect(mapStateToProps)(FormSinhVien)