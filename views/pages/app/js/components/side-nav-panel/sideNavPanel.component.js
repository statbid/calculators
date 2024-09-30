'use strict'

import { Component } from 'lib/component.class.js'
import homeComponent from '../home/home.component.js'
import cosCalculatorComponent from '../cos-calculator/cosCalculator.component.js'
import hypBudgetChangeComponent from '../hypothetical-budget-change/hypotheticalBudgetChange.component.js'
import hypCosChangeComponent from '../hypothetical-cos-change/hypotheticalCosChange.component.js'
import incTestBudgetLengthComponent from '../incrementality-test-length/incrementalityTestLength.component.js'

const links = [
  { id: 'home-link', text: 'Home' },
  { id: 'cos-calculator-link', text: 'COS Calculator' },
  { id: 'hyp-budget-change-link', text: 'Hypothetical Budget Change Calculator' },
  { id: 'hyp-cos-change-link', text: 'Hypothetical COS Change Calculator' },
  { id: 'inc-test-budget-length-link', text: 'Incrementality Test Budget and Length Calculator' }]

let linksTable = `<table id="links-table">`
linksTable += links.map((link) => {
  const { id, text } = link
  const row = `<tr>
  <td class="hover-bg-color" id="${id}">${text}</td>
  </tr>`
  return row
}).join("\n") + `</table>`

const template = `
  <div id="side-nav-panel-component">
    <div id="title-menu">      
      <p id="org-name">StatBid</p>
    </div>
    <div id="menu-list">
      ${linksTable}
    </div>
  </div>`

const style = `
  #org-name {
    color: #90e2f7;
    font-size: 18px;
    border-left: 0.3rem solid #20a2e7;
    border-radius: 0.5rem;
    padding: 2% 3%;
  }

  #title-menu {
    position: top;    
    width: 100vw;    
    padding: 0.5% 3%;
  } 

  #side-nav-panel-component {    
    color: #a5a0b4;     
    height: auto;   
    padding: 0% 10% 1% 0%;      
  }

  #links-table td {
    padding: 3% 10%;
    text-wrap: wrap;
    font-size: 0.9rem;
    border-radius: 5px;      
  }
  
  #menu-list {
    background-color: rgba(30,50,70, 1);
    border-radius: 5px;
    width:50vw;
    padding: 5% 3%;
    position: absolute;
    left: 0px;
    top: 7rem;
    z-index:1;    
    margin: -10% 0%;
    display: none;
  }

  
  .current-link {  
    background-color: rgba(0,180,250, 0.2);
    color: #f3f3f7;
    border: 1px solid rgba(0,180,250, 0.9);
  }

  .non-current-link{
    color: #a5a0b4;
  }
  
  .hover-bg-color:hover {
    background-color: rgba(0,180,250, 0.2);
  }

  @media only screen and (min-width: 768px){    
    #menu-list {
      position: absolute;
      width: 20vW;      
      padding: 2% 1%;
      top: 10%;
      left: 2%;
      margin: 0;
      z-index: 1;
    }
      
    #title-menu {
      position: absolute;
      left: 0px;      
      width: 100vw;    
      padding: 0% 2%;
      margin: 0;
    }
    
    #links-table  td {
      padding: 2% 4%;
    }

    #org-name{
      padding: 0.1% 0.5%; 
    }

    #side-nav-panel-component {    
      color: #a5a0b4;     
      height: auto;   
      padding: 0% 10% 5% 0%;      
    }
  }

`

const eventHandlers = {
  sideNavPanelHandler: () => {
    const homeLink = document.getElementById('home-link')
    const cosCalculatorLink = document.getElementById('cos-calculator-link')
    const hypBudgetChangeLink = document.getElementById('hyp-budget-change-link')
    const hypCosChangeLink = document.getElementById('hyp-cos-change-link')
    const incTestBudgetLengthLink = document.getElementById('inc-test-budget-length-link')
    homeLink.classList.add('current-link')

    const sideNavPanelComponent = document.getElementById('side-nav-panel-component')
    const mainPanel = document.getElementById('main-panel-component')
    const menuList = document.getElementById('menu-list')
    menuList.style.display = "none"
    let isMenuClicked = false

    sideNavPanelComponent.onclick = async (e) => {
      isMenuClicked = !isMenuClicked
      if (isMenuClicked) {
        menuList.style.display = "block"
      } else {
        menuList.style.display = "none"
      }
    }

    mainPanel.onclick = async (e) => {
      menuList.style.display = "none"
    }

    homeLink.onclick = async (e) => {
      e.preventDefault()
      try {
        homeLink.classList.add('current-link')
        cosCalculatorLink.classList.remove('current-link')
        hypBudgetChangeLink.classList.remove('current-link')
        hypCosChangeLink.classList.remove('current-link')
        incTestBudgetLengthLink.classList.remove('current-link')

        const mainPanel = document.getElementById('main-panel-component')
        mainPanel.innerHTML = homeComponent.template

      } catch (e) {
        throw new Error(e)
      }
    }

    cosCalculatorLink.onclick = async (e) => {
      e.preventDefault()
      try {
        cosCalculatorLink.classList.add('current-link')
        homeLink.classList.remove('current-link')
        hypBudgetChangeLink.classList.remove('current-link')
        hypCosChangeLink.classList.remove('current-link')
        incTestBudgetLengthLink.classList.remove('current-link')

        const mainPanel = document.getElementById('main-panel-component')
        cosCalculatorComponent.load(mainPanel)
      } catch (e) {
        throw new Error(e)
      }
    }

    hypBudgetChangeLink.onclick = async (e) => {
      e.preventDefault()
      try {
        hypBudgetChangeLink.classList.add('current-link')
        cosCalculatorLink.classList.remove('current-link')
        homeLink.classList.remove('current-link')
        hypCosChangeLink.classList.remove('current-link')
        incTestBudgetLengthLink.classList.remove('current-link')

        const mainPanel = document.getElementById('main-panel-component')
        hypBudgetChangeComponent.load(mainPanel)
      } catch (e) {
        throw new Error(e)
      }
    }

    hypCosChangeLink.onclick = async (e) => {
      e.preventDefault()
      try {
        hypBudgetChangeLink.classList.remove('current-link')
        cosCalculatorLink.classList.remove('current-link')
        homeLink.classList.remove('current-link')
        hypCosChangeLink.classList.add('current-link')
        incTestBudgetLengthLink.classList.remove('current-link')

        const mainPanel = document.getElementById('main-panel-component')
        hypCosChangeComponent.load(mainPanel)
      } catch (e) {
        throw new Error(e)
      }
    }

    incTestBudgetLengthLink.onclick = async (e) => {
      e.preventDefault()
      try {
        hypBudgetChangeLink.classList.remove('current-link')
        cosCalculatorLink.classList.remove('current-link')
        homeLink.classList.remove('current-link')
        hypCosChangeLink.classList.remove('current-link')
        incTestBudgetLengthLink.classList.add('current-link')

        const mainPanel = document.getElementById('main-panel-component')
        incTestBudgetLengthComponent.load(mainPanel)
      } catch (e) {
        throw new Error(e)
      }
    }
  }
}

const sideNavPanelComponent = new Component({ template, style, eventHandlers })

export default sideNavPanelComponent