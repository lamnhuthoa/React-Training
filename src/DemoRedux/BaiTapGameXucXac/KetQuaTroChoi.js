import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        let {soBanChoi, soBanThang, banChon} = this.props.baiTapGameXucXacReducer;
        return (
            <div className="container text-center">
                <div className="display-4 m-3">
                    Bạn chọn: <span className="text-warning">{banChon ? 'Tài' : 'Xỉu'}</span>
                </div>
                <div className="display-4 m-3">
                    Số bàn thắng: <span className="text-success">{soBanThang}</span>
                </div>
                <div className="display-4 m-3">
                    Tổng số bàn chơi: <span className="text-primary">{soBanChoi}</span>
                </div>
                <button className="btn btn-success m-3">
                    <div className="display-4 p-2" onClick={() => {
                        const action = {
                            type: "PLAY_GAME"
                        }
                        this.props.dispatch(action);
                    }}>Play game</div>
                </button>
                <button className="btn btn-warning m-3">
                    <div className="display-4 p-2" onClick={() => {
                        const action = {
                            type: "RESET_GAME"
                        }
                        this.props.dispatch(action);
                    }}>Reset game</div>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)
