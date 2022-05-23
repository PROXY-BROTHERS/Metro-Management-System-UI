import React, { Component } from 'react'
import HomePage from './user/HomePage'

export default class App extends Component {
  render() {
    return (
      <>
      {console.log("local storage1 "+localStorage.getItem('token'))}
        <HomePage/>
      </>
    )
  }
}