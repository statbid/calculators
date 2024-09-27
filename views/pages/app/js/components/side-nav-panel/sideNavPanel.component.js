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
    ${linksTable}  
  </div>`

const style = `
  #side-nav-panel-component {    
    color: #a5a0b4;
    flex:10%;  
    height: 100%;
    margin: 0 1rem 0 0;
    padding: 10px;    
  }

  #links-table td {
    padding: 3% 10%;
    text-wrap: wrap;
    font-size: 0.9rem;
    border-radius: 5px;
    
  }

  .current-link {  
    background-color: rgba(0,180,250, 0.2);
    color: #f3f3f7;
  }

  .non-current-link{
    color: #a5a0b4;
  }
  
  .hover-bg-color:hover {
  background-color: rgba(0,180,250, 0.2);
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
        mainPanel.innerHTML = cosCalculatorComponent.template

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
        mainPanel.innerHTML = hypBudgetChangeComponent.template
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
        mainPanel.innerHTML = hypCosChangeComponent.template
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
        mainPanel.innerHTML = incTestBudgetLengthComponent.template
      } catch (e) {
        throw new Error(e)
      }
    }



  }
}

const sideNavPanelComponent = new Component({ template, style, eventHandlers })

export default sideNavPanelComponent