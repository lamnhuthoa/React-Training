import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        // this.props: là một thuộc tính có sẵn của react class component dùng để nhận giá trị 
        // từ component cha truyền vào (component cha là component sử dụng thẻ Footer này)

        console.log(this.props);

        return (
            <footer style={{backgroundColor: this.props.bgColor}} className="mt-2 text-center text-white">
                {this.props.content}
            </footer>
        )
    }
}
