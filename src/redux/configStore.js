import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import { baiTapQuanLyNguoiDungReducer } from "./reducers/BaiTapQuanLyNguoiDungReducer";
import { gioHangReducer } from './reducers/gioHangReducer';

//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer,

    //State BaiTapOanTuXi
    BaiTapOanTuXiReducer,

    baiTapQuanLyNguoiDungReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);