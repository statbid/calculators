'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="top-navbar-component">
  <!--<svg focusable="false" viewBox="0 0 24 24" id="menu-bar">
    <path stroke="#505052" fill="none" stroke-width="1.5" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>-->  
  <p id="app-title">StatBid</p>  
</div>`

const style = `
  #top-navbar-component {    
    display: flex;    
    background-color: #25292e;
    border-bottom: 1px solid #3d4147;
  }
    
  #app-title {
    color: #d0d1d7;
    padding: 0px 20px;
    font-size: 1.2rem;
    margin-left:1rem;
    font-weight:600;    
  }
  
  #menu-bar {
    width:2%;
    height:2%;    
    margin-top:1%;
  }
`

const eventHandlers = {}

const topNavbarComponent = new Component({ template, style, eventHandlers })

export default topNavbarComponent