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
/* for mobile phones*/

  #main-container {
    margin:auto;
    width:100%;
    height:100%;
  }

  @media only screen and (min-width: 600px){
  /* For Tablets */
    margin:auto;
    width:100%;
  }

  @media only screen and (min-width: 768px){
    /* For desktop: */
    #main-container {
      margin:auto;
      max-width:1300px;    
      min-height:100vh;    
    }    
  } 
  `

const rootComponent = new Component({ template, style })

export default rootComponent