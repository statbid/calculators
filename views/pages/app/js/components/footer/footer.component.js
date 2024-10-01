'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div id="footer-component">  
    <p id="footer-text">&copy;StatBid</p>  
  </div>
`

const style = `
  #footer-component {
    margin: 0;
    align-items: center;
    height: 10%;
    width: 100%;
  }

  #footer-text {
    color: #d0d1d7;
    padding: 1% 2%;    
    font-size: 1.2rem;
    margin-left: 1rem;
    font-weight: 600;    
  }
    
`
const eventHandlers = {}

const footerComponent = new Component({ template, style, eventHandlers })

export default footerComponent