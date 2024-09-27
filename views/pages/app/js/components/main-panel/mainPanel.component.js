'use strict'

import { Component } from 'lib/component.class.js'
import homeComponent from '../home/home.component.js'

const template = `
  <div id="main-panel-component">
    ${homeComponent.template}  
  </div>`

const style = `
  #main-panel-component {    
    border: 1px solid #3d4147;
    border-radius: 5px;        
    padding: 10px;
    margin-top: 1rem;
    flex:80%;    
  }
`

const eventHandlers = {}

const mainPanelComponent = new Component({ template, style, eventHandlers })

export default mainPanelComponent