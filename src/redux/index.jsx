//Store chính: Quản lý tất cả store con (Mỗi store con quản lý dữ liệu theo nghiệp vụ)
import {combineReducers} from 'redux';
import storeModalReducer from './reducers/Modal.reducer'
import gioHangModalReducer from './reducers/gioHang.reducer'
import quanLySanPhamReducer from './reducers/quanLySanPham.reducer'
import sinhVienStoreReducer from './reducers/QuanLySinhVien.reducer'
import gamePlayStorePreducer from './reducers/GamePlay.reducer'

const rootReducer = combineReducers({

    //store con (store nghiệp vụ sau này)
    //storeModalReducer:storeModalReducer
    storeModalReducer,
    gioHangModalReducer,
    quanLySanPhamReducer,
    sinhVienStoreReducer,
    gamePlayStorePreducer
})

export default rootReducer;