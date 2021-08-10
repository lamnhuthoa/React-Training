import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class Child extends PureComponent {
//PureComponent dùng để tối ưu render, sẽ nhận vào props, props đó thay đổi thì nó sẽ tự render

    constructor(props){
        super(props);
        this.state = {

        }

        console.log('constructor child')
    }

    // shouldComponentUpdate(newProps, newState){
    //     console.log('shouldComponentUpdate child')
    //     return true;
    // }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return null;
    }


    render() {
        console.log('render child')
        return (
            <div>
                <div>Id {this.props.product.id}</div>
                <div>Name {this.props.product.name}</div>
                <footer className="p-5 bg-dark text-white text-center">footer</footer>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child')
    }

    componentDidUpdate(prevProps, prevState) {
        //Hạn chế setState (xem xét kĩ việc setSate) trong hàm này
        //=> Dùng if để kiểm tra
        console.log('componentDidUpdate child')
    }

    componentWillUnmount() {
        //Chạy trước khi component mất khỏi giao diện
        console.log('componentWillUnmount')
    }
}
