import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import './BaiTapGameXucXac.css' //Ảnh hưởng đến toàn bộ ứng dụng kể cả app.js

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center">Bài tập game xúc xắc</h3>
                <img src="" />
                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
