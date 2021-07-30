import React, { Component } from 'react';
import { connect } from 'react-redux';

class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0;}
        }`

        return (
            <div className="playerGame text-center">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{ position: 'relative', overflow: 'hidden' }}>
                    <img style={{ position: 'absolute', left: 20, animation: `randomItem${Date.now()} 0.5s`, transform: 'rotate(120deg)' }} class="mt-3" width={75} height={75} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src="./img/gameOanTuXi/playerComputer.png" alt="./img/gameOanTuXi/playerComputer.png" />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer);