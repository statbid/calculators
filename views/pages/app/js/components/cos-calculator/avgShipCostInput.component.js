'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">
      <label>Average Shipping Costs</label>
    </div>
    <div class="input-container">
      <input type="text" id="metric-ship" class="metric_percent" value="12">
    </div>
  </div>
`

const style = ``

const eventHandlers = {}

const avgShipCostInputComponent = new Component({ template, style, eventHandlers })

export default avgShipCostInputComponent