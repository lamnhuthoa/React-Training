const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png', datCuoc: true },
        { ma: 'bua', hinhAnh: './img/gameOanTuXi/bua.png', datCuoc: false },
        { ma: 'bao', hinhAnh: './img/gameOanTuXi/bao.png', datCuoc: false },
    ],
    ketQua: "I'm iron man and I love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/gameOanTuXi/keo.png' }
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                return { ...item, datCuoc: false }
            })

            //Tìm ra mã cược để change trạng thái đặt cược ứng với mã cược đó
            let index = mangCuocUpdate.findIndex(quanCuoc => quanCuoc.ma === action.maCuoc);
            if (index !== -1) {
                mangCuocUpdate[index].datCuoc = true;
            }

            //setState của mangCuoc => render lại giao diện
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state }
        }

        case 'RANDOM': {

            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;

            return { ...state }
        }

        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hòa rồi !!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'iron man thua !!';
                    } else {
                        state.ketQua = 'iron man thắng !!'
                        state.soBanThang += 1;
                    } break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'iron man thắng !!';
                        state.soBanThang += 1;
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'hòa rồi !!';
                    } else {
                        state.ketQua = 'iron man thua !!'
                    } break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'iron man thua !!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'iron man thắng !!';
                        state.soBanThang += 1;
                    } else {
                        state.ketQua = 'hòa rồi !!'
                    } break;
                default: state.ketQua = "I'm iron man and I love you 3000 !!!";
            }
            state.soBanChoi += 1;
            return { ...state };
        }

        default: return { ...state }
    }
}

export default BaiTapOanTuXiReducer;