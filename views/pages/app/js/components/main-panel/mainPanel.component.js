'use strict'

import { Component } from 'lib/component.class.js'
import homeComponent from '../home/home.component.js'

const template = `
  <div id="main-panel-component">
    ${homeComponent.template}  
  </div>`

const style = `
  #main-panel-component {
    /*border-radius: 1%;
    border: 1px solid #1d2127;*/    
    margin-top:1rem;
    /*padding:2% 2%;   */
  }
`

const eventHandlers = {}

const mainPanelComponent = new Component({ template, style, eventHandlers })

export default mainPanelComponent