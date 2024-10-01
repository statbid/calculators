'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="calculator-results">

    <p class="sub-section-head">New COS Targets for Variable Cost Channels</p>

    <div class="result-dashboard">

      <div class="grid-cell">
        <p><span id="metric_marginal" class="big-font">0 Days</span><br><br>
        <span class="sub-title">Target Marginal COS</span></p>
      </div>

      <div class="grid-cell">
        <p><span id="metric_paid" class="big-font">0 Days</span><br><br>
        <span class="sub-title">Target Paid COS</span></p>
      </div>
      
    </div>

  </div>
`

const style = ``

const eventHandlers = {}

const cosCalcResultComponent = new Component({ template, style, eventHandlers })

export default cosCalcResultComponent