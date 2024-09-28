'use strict'

import { Component } from 'lib/component.class.js'
import sideNavPanelComponent from './side-nav-panel/sideNavPanel.component.js'
import topNavbarComponent from './top-navbar/topNavbar.component.js'
import mainPanelComponent from './main-panel/mainPanel.component.js'
//${topNavbarComponent.template}
const template = `
  <div>
    <div id="root-component">      
      <div id="main-container">
        ${sideNavPanelComponent.template}
        ${mainPanelComponent.template}
      </div>
    </div>
  </div>`

const style = `
  #main-container {
    margin:auto;
    max-width:1300px;    
    display: grid;
    grid-template-columns: 20% 80%;
    min-height:100vh;    
  }`

const rootComponent = new Component({ template, style })

export default rootComponent