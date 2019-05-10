import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>Hello MERN Stack</h2>
                <h6>This is my first app from the Shama Hoque's React Full Stack Projects Book!!!</h6>
            </div>
        )
    }
}
export default hot(module)(HelloWorld)