'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="top-navbar-component">
  <p id="app-title">StatBid</p>  
</div>`

const style = `
  #top-navbar-component{    
    display: flex;    
    background-color: #25292e;
    border-bottom: 1px solid #3d4147;
  }
    
  #app-title{
    color: #d0d1d7;
    padding: 0px 20px;
    font-size: 1.2rem;
    margin-left:1rem;
    font-weight:600;    
  }
`

const eventHandlers = {}

const topNavbarComponent = new Component({ template, style, eventHandlers })

export default topNavbarComponent