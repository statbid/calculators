'use strict'

import { Component } from 'lib/component.class.js'
import homeComponent from '../home/home.component.js'

const template = `
  <div id="main-panel-component">
    ${homeComponent.template}  
  </div>
`
const style = `
  #main-panel-component {    
    margin:0;
    padding: 2%;
  }

  @media only screen and (min-width:768px){
 
    #main-panel-component { 
      padding: 0% 0.5%;
    }

  }
`
const eventHandlers = {}

const mainPanelComponent = new Component({ template, style, eventHandlers })

export default mainPanelComponent