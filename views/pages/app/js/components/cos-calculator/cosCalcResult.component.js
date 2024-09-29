'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="calculator-results">
    <p class="sub-section-head bottom-border-thick">New COS Targets for Variable Cost Channels</p>
    <div id="result-dashboard">
      <div>
        <p class="grid-cell"><span id="metric_marginal" class="big-font">0 Days</span><br><br><span class="sub-title">Target Marginal COS</span></p>
      </div>
      <div>
        <p class="grid-cell"><span id="metric_paid" class="big-font">0 Days</span><br><br><span class="sub-title">Target Paid COS</span></p>
      </div>
    </div>
  </div>
`

const style = `

  @media only screen and (min-width: 600px){

  }

  @media only screen and (min-width: 768px){

  }
`

const eventHandlers = {}

const cosCalcResultComponent = new Component({ template, style, eventHandlers })

export default cosCalcResultComponent