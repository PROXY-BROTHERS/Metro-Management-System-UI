import React from 'react'
import TopNavbar from '../components/TopNavbar'
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import { Component } from 'react';

export default class HomePage extends Component {
    render () {
    return (
        <TopNavbar/>
      )
  }
}
