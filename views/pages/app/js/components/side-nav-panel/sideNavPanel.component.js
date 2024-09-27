'use strict'

import { Component } from 'lib/component.class.js'

const links = [
  'Home',
  'COS Calculator',
  'Hypothetical Budget Change Calculator',
  'Hypothetical COS Change Calculator',
  'Incrementality Test Budget and Length Calculator']

let linksTable = `<table id="links-table">`
linksTable += links.map((link) => {
  let id = link.toLowerCase().split(" ").join("-") + '-link'
  const row = `<tr>
  <td id="${id}">${link}</td>
  </tr>`
  return row
}).join("\n") + `</table>`

const template = `
  <div id="side-nav-panel-component">
    ${linksTable}  
  </div>`

const style = `
  #side-nav-panel-component {    
    color: #a5a0b4;
    flex:10%;  
    height: 100vh;    
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 10px 5px;      
  }
  
  #links-table td {
    padding: 3% 10%;
    text-wrap: wrap;
    font-size: 0.9rem;
    border-radius: 5px;
    /*border: 1px solid #3d4147;*/
  }

  #home-link {  
    background-color: rgba(0,180,250, 0.2);
    color: #f3f3f7;
  }
`

const eventHandlers = {}

const sideNavPanelComponent = new Component({ template, style, eventHandlers })

export default sideNavPanelComponent