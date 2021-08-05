import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import { gioHangReducer } from './gioHangReducer';
import BaiTapDatVeReducer from './BaiTapDatVeReducer';

//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer,

    //State BaiTapOanTuXi
    BaiTapOanTuXiReducer,

    BaiTapDatVeReducer
});

export const store = createStore(rootReducer);