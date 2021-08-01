import { combineReducers, createStore } from "redux";
import BaiTapOanTuXiReducer from "./BaiTapOanTuXiReducer";
import { gioHangReducer } from './reducers/gioHangReducer';
import { baiTapGameXucXacReducer } from './reducers/baiTapGameXucXacReducer';

//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    gioHangReducer: gioHangReducer,

    //State BaiTapOanTuXi
    BaiTapOanTuXiReducer,

    baiTapGameXucXacReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);