//Liệt kê các state của ứng dụng bài tập game
const stateDefault = {
    soBanChoi: 0,
    soBanThang: 0,
    banChon: true,
    mangXucXac: [
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
        { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
    ]
}

export const baiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state };
        }

        case 'PLAY_GAME': {
            let mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra một object xúc xắc ngẫu nhiên
                let xxnn = { hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`, diem: soNgauNhien };
                //Thêm vào mảng xúc xắc ngẫu nhiên
                mangXucXacNgauNhien.push(xxnn);
            }
            //Set lại state mangXucXac
            state.mangXucXac = mangXucXacNgauNhien;

            //Xử thắng cuộc
            let tongDiem = mangXucXacNgauNhien.reduce((tong, xxnn, index) => {
                return tong += xxnn.diem;
            }, 0);

            if ((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)) {
                state.soBanThang += 1;
            }

            state.soBanChoi += 1;

            return { ...state };
        }

        case 'RESET_GAME': {
            state.mangXucXac = [
                { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
                { hinhAnh: './img/gameXucXac/1.png', diem: 1 },
                { hinhAnh: './img/gameXucXac/1.png', diem: 1 }
            ]
            state.soBanChoi = 0;
            state.soBanThang = 0;
            state.banChon = true;
            return { ...state}
        }

        default: return state;
    }
}