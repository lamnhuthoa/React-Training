import React, { Component } from 'react'

import style from './StyleComponent.module.css'

export default class StyleComponent extends Component { //Thường sử dụng cách import CSS, hoặc inline css
    render() {

        let fontSize = 50;

        return (
            <div>
                Style Component
                <p style={{fontSize: `${fontSize}px`, padding: '15px'}} className={`${style.fontBold} ${style['p-green']}`}>Hello</p>
            </div>
        )
    }
}
