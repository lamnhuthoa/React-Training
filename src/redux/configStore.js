import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import { baiTapQuanLyNguoiDungReducer } from "./reducers/BaiTapQuanLyNguoiDungReducer";
import { gioHangReducer } from './reducers/gioHangReducer';
import { QuanLySinhVienReducer } from "./reducers/QuanLySinhVienReducer";

//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer,

    //State BaiTapOanTuXi
    BaiTapOanTuXiReducer,

    baiTapQuanLyNguoiDungReducer,

    QuanLySinhVienReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);