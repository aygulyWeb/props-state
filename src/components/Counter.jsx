import React from 'react';
import '../App.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            h1: ''
        }
        this.increment = this.increment.bind(this);
        this.increment2 = this.increment2.bind(this);
        this.decrement = this.decrement.bind(this);
        this.decrement2 = this.decrement2.bind(this);
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    increment2() {
        this.setState({count: this.state.count + 10})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    decrement2() {
        this.setState({count: this.state.count - 10})
    }

    // changeColor(){
    //     if (this.state.count < 0) {
    //         this.state.h1='black'
    //     }
    // }
    render() {
        return (
            <div className='container'>
                <h1 style={{backgroundColor: this.state.count >= 0 ? this.state.h1 = 'blue' : this.state.h1 = 'cornflowerblue'}}>
                    {this.state.count >= 0 ? 'Вода' : 'Лёд'} {this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.increment2}>+10</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.decrement2}>-10</button>

            </div>
        );
    }
}

export default Counter