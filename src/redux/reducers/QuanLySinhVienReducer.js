const stateDefault = {
    mangSinhVien: [
        { maSV: 1, hoTen: 'Nguyễn Văn A', soDienThoai: '09090909', email: 'abc@gmail.com' },
        { maSV: 2, hoTen: 'Nguyễn Văn B', soDienThoai: '08080808', email: 'cba@gmail.com' }
    ],
    sinhVienChinhSua: { maSV: 1, hoTen: 'Nguyễn Văn A', soDienThoai: '09090909', email: 'abc@gmail.com' },
    sinhVien: {
        values: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            maSV: '',
            hoTen: '',
            email: '',
            soDienThoai: ''
        }
    }
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            //Thêm dữ liệu sinh viên vào mangSinhVien
            state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
            return { ...state }
        }

        case 'XOA_SINH_VIEN': {
            state.mangSinhVien = [...state.mangSinhVien.filter(sinhVien => sinhVien.maSV !== action.maSV)];
            return { ...state }
        }

        case 'CHINH_SUA': {
            state.sinhVien.values = action.sinhVienChinhSua;
            state.sinhVien = {...state.sinhVien}
            return { ...state }
        }

        case 'HANDLE_CHANGE_INPUT' : {
            state.sinhVien = action.sinhVien;

            return {...state}
        }

        case 'CAP_NHAT_SINH_VIEN' : {
            const mangSinhVienCapNhat = [...state.mangSinhVien];

            //Tìm sinh viên cần cầm nhật
            let  index = mangSinhVienCapNhat.findIndex(sinhVien => sinhVien.maSV === action.sinhVienCapNhat.maSV);

            if(index !== -1) {
                mangSinhVienCapNhat[index] = action.sinhVienCapNhat;
                // sinhVienCapNhat.hoTen = action.sinhVienCapNhat.hoTen;
                // sinhVienCapNhat.email = action.sinhVienCapNhat.email;
                // sinhVienCapNhat.soDienThoai = action.sinhVienCapNhat.soDienThoai;
            }
            state.mangSinhVien = mangSinhVienCapNhat;
            return {...state}
        }

        default: return state
    }
}