







const stateDefault = {
    mangNguoiDung : [
        {taiKhoan: 'nguyenvana', hoTen:'Nguyễn Văn A', matKhau: '123456789', email: 'nguyenvana@gmail.com', soDienThoai: '0909090909', loaiNguoiDung: 'KhachHang'},
        {taiKhoan: 'nguyenvanb', hoTen:'Nguyễn Văn B', matKhau: '123456789', email: 'nguyenvanb@gmail.com', soDienThoai: '0909090909', loaiNguoiDung: 'KhachHang'}
    ]
}

export const baiTapQuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'THEM_NGUOI_DUNNG':{
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]

            return {...state}
        }

        case 'XOA_NGUOI_DUNG' : {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung]
            state.mangNguoiDung = mangNguoiDungCapNhat.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan)

            return {...state}
        }
        
        default: return state
    }
}