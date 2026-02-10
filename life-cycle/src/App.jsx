import React, { Component } from 'react'
import Child1 from './Components/Child1'

export default class App extends Component {
  componentDidMount(){
    console.log("firt render");
  }
  render() {
    return (
      <div>App
        <Child1></Child1>
      </div>
    )
  }
}
