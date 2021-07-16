import React, { Component } from 'react'

export default class BaiTapThuKinh extends Component {

    glassList = [
        { "id": 1, "price": 30, "name": "GUCCI G8850U", "url": "./img/glassesImage/v1.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 2, "price": 50, "name": "GUCCI G8759H", "url": "./img/glassesImage/v2.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 3, "price": 30, "name": "DIOR D6700HQ", "url": "./img/glassesImage/v3.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 4, "price": 70, "name": "DIOR D6005U", "url": "./img/glassesImage/v4.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 5, "price": 40, "name": "PRADA P8750", "url": "./img/glassesImage/v5.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 6, "price": 60, "name": "PRADA P9700", "url": "./img/glassesImage/v6.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 7, "price": 80, "name": "FENDI F8750", "url": "./img/glassesImage/v7.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 8, "price": 100, "name": "FENDI F8500", "url": "./img/glassesImage/v8.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." },
        { "id": 9, "price": 60, "name": "FENDI F4300", "url": "./img/glassesImage/v9.png", "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip." }
    ];

    state = {
        id: this.glassList.id,
        imgSrc: this.glassList[0].url,
        name: this.glassList[0].name,
        desc: this.glassList[0].desc
    }

    //Thay đổi tên sản phẩm kính tại hình model bên trái
    handleTitle = (index) => {
        this.setState({
            name: this.glassList[index].name,
            desc: this.glassList[index].desc
        })
    }

    //Thay đổi url hình ảnh sản phẩm khi click vào menu kính
    handleChangeGlass = (id) => {
        this.setState({
            imgSrc: `./img/glassesImage/v${id}.png`,
        })
    }
    
    renderModelLeft = () => {
        return (
            <div className="model__left__detail">
                <div className="model__left__glasses" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-160%)', opacity: '0.5' }}>
                    <img src={this.state.imgSrc} style={{ width: '8rem' }} />
                </div>
                <div className="model__left__glasses__title text-left" style={{ position: 'absolute', left: '0', bottom: '0', width: '100%', padding: '0.5rem', background: 'rgba(249, 176, 123, 0.5)', borderBottom: '5px solid rgba(190, 127, 80)' }}>
                    <h3 style={{ color: '#846BA8', fontSize: '0.8rem' }}>{this.state.name}</h3>
                    <p style={{ color: '#fff', fontSize: '0.7rem', fontWeight: '600', margin: '0' }}>{this.state.desc}</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div style={{ background: 'url(./img/glassesImage/background.jpg), rgba(0,0,0,0.5)', height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center', position: 'relative', backgroundBlendMode: 'darken' }}>
                <div className="main" style={{ zIndex: '3' }}>
                    <div className="header text-white text-center py-4" style={{ background: 'rgba(0,0,0,0.7)', fontSize: '1.2rem' }}>
                        TRY GLASSES APP ONLINE
                    </div>
                    <div className="model d-flex container my-4" style={{ width: '100%' }}>
                        <div className="model__left w-50">
                            <div className="model__left__content d-flex justify-content-center">
                                <div className="model__left__img text-center" style={{ position: 'relative', width: '15rem' }}>
                                    <img src="./img/glassesImage/model.jpg" style={{ display: 'block', width: '100%' }}></img>
                                    {this.renderModelLeft()}
                                </div>
                            </div>
                        </div>
                        <div className="model__right w-50">
                            <div className="model__right__content d-flex justify-content-center">
                                <div className="model__right__img text-center" style={{ position: 'relative', width: '15rem' }}>
                                    <img src="./img/glassesImage/model.jpg" style={{ display: 'block', width: '100%' }}></img>
                                    <div className="model__left__glasses" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-160%)', opacity: '0.5' }}>
                                        <img src={this.state.imgSrc} style={{ width: '8rem' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glasses p-4 container">
                        <div className="glasses__content row d-flex flex-row align-items-center" style={{ background: '#fff' }}>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('1'); this.handleTitle('0') }} src="./img/glassesImage/v1.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('2'); this.handleTitle('1') }} src="./img/glassesImage/v2.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('3'); this.handleTitle('2') }} src="./img/glassesImage/v3.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('4'); this.handleTitle('3') }} src="./img/glassesImage/v4.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('5'); this.handleTitle('4') }} src="./img/glassesImage/v5.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('6'); this.handleTitle('5') }} src="./img/glassesImage/v6.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('7'); this.handleTitle('6') }} src="./img/glassesImage/v7.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('8'); this.handleTitle('7') }} src="./img/glassesImage/v8.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                            <div className="glasses__item col-2">
                                <img onClick={() => { this.handleChangeGlass('9'); this.handleTitle('8') }} src="./img/glassesImage/v9.png" style={{ background: '#fff', width: '100%', display: 'block', margin: '1rem 0 ', border: '1px solid #8e8e8e8e', padding: '0.5rem', cursor: 'pointer' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
