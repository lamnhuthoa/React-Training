import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('ABC');
    }

    showMessage = (mess) => {
        alert(`Hello ${mess}`);
    }

    render() {

        let name = "Bao";

        return (
            <div>
                <h3>Handle Event</h3>

                <button onClick={(event) => {
                    // alert(`${name} dep trai`)
                    this.showMessage('Hoa') 
                }} className="btn btn-primary">Click me</button>
            </div>
        )
    }
}
