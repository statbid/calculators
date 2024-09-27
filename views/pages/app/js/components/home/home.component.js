'use strict'

import { Component } from 'lib/component.class.js'

const calculatorList = [{
  title: 'COS Calculator',
  purpose: 'Helps calculate the Cost of Sale (COS) by considering various business metrics such as average order value, lifetime revenue, cost of goods sold, shipping costs, and other transaction-related expenses.',
  idealFor: 'Businesses wanting to understand the efficiency of their ad spend and optimize for profitability.'
},
{
  title: 'Hypothetical Budget Change Calculator',
  purpose: 'Assists in estimating the impact of changing marketing budgets on COS and revenue. It allows users to input their current spend and revenue and explore the effects of potential budget changes.',
  idealFor: 'Marketing teams looking to forecast the outcome of budget adjustments and incremental spend.'
},
{
  title: 'Hypothetical COS Change Calculator',
  purpose: 'Provides insights into how changes in COS can affect spend, revenue, and profitability. It helps users visualize the effects of different COS targets on their overall marketing efficiency.',
  idealFor: 'Businesses aiming to adjust their marketing strategies to achieve desired COS targets and assess the impact on revenue.'
},
{
  title: 'Incrementality Test Budget & Length Calculator',
  purpose: 'Estimates the required budget and time length for running an incrementality test to determine the added value of advertising. It helps calculate the time needed to see a measurable lift in performance.',
  idealFor: 'Marketing professionals conducting incrementality tests to measure the effectiveness of their ad spend.'
}]

const calculatorListCard = calculatorList.map(calculator => {
  const { title, purpose, idealFor } = calculator
  const id = title.toLowerCase().split(" ").join("-")

  return `
  <div class="calculator" id="${id}">
    <div class="calculator-title-container">
      <p class="calculator-title">${title}</p>
    </div>
    <div class="calculator-description-container">      
      <p class="calculator-purpose"><span class="calculator-subtitle">Purpose</span> ${purpose}</p>      
      <p class="calculator-ideal-for"><span class="calculator-subtitle">Ideal For</span> ${idealFor}</p>      
    </div>
  </div>`}).join("\n")

const template = `
  <div id="home-component">
    ${calculatorListCard}
  </div>`

const style = `
  .calculator {
    /*padding: 1rem;*/
    margin: 1rem;
    color: #a5a0b4;    
    font-size: 0.95rem;    
    flex:1;
  }

  .calculator-description-container:hover{
    height:100%;
  }

  .calculator-subtitle {    
    color: #d0e0f0;
    font-size: 1rem;
    font-weight:600;
  }

  #home-component {    
    display: grid;
    grid-template-columns: auto auto;    
  }  
  .calculator-title {
    font-weight:600;
    color: #d0e0f0;
    font-size: 1rem;
  }
  .calculator-title-container {
    border: 1px solid #004157; /*#3d4147;*/
    border-bottom: 0px;
    border-radius: 10px 10px 0px 0px;
    text-align:center;
    padding:3%;
    background-color: #004157;
  }
  .calculator-description-container {
    border: 1px solid #004157;
    border-radius: 0px 0px 10px 10px;
    text-align:center;
    padding:3%;
    border-top: 0px;
    height:60%;
  }
`

const eventHandlers = {}

const homeComponent = new Component({ template, style, eventHandlers })



export default homeComponent