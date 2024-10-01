'use strict'

import { Component } from 'lib/component.class.js'
import sideNavPanelComponent from './side-nav-panel/sideNavPanel.component.js'
import mainPanelComponent from './main-panel/mainPanel.component.js'
import footerComponent from './footer/footer.component.js'

const template = `
  <div id="root-component">      
    <div id="main-container">
      ${sideNavPanelComponent.template}
      ${mainPanelComponent.template}
      ${footerComponent.template}       
    </div>         
  </div>  
`

const style = `
/* for mobile phones*/

  #main-container {
    margin: 0;
    width: 100%;
    height: 100%;    
  }
  
  #root-component {
    margin: 0;
  }

  @media only screen and (min-width: 768px){
    /* For desktop: */

    #main-container {
      margin: auto;
      max-width: 1300px;    
      min-height: 100vh;    
    }    
  } 
  `

const rootComponent = new Component({ template, style })

export default rootComponent