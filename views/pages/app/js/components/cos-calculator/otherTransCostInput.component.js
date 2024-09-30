'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">
      <label>Other Per-Transaction Expenses</label>
    </div>
    <div class="input-container">
      <input type="text" id="metric-expense" class="metric_percent" value="5.0">
    </div>
  </div>  
`

const style = ``

const eventHandlers = {}

const otherTransCostInputComponent = new Component({ template, style, eventHandlers })

export default otherTransCostInputComponent