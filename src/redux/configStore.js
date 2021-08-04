import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import { gioHangReducer } from './reducers/gioHangReducer';

//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer,

    //State BaiTapOanTuXi
    BaiTapOanTuXiReducer
});

export const store = createStore(rootReducer);