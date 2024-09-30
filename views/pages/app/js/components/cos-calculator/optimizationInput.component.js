'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">            
      <label>Optimization Options</label>
    </div>
    <div class="input-container">
      <input type="radio" name="metric-optimize" value="0" id="metric_optimize_init" checked>
      <label for="metric_optimize_init">Initial</label>
      <input type="radio" name="metric-optimize" value="1" id="metric_optimize_life">
      <label for="metric_optimize_life">Lifetime</label>
    </div>
  </div>
`

const style = ``

const eventHandlers = {}

const optimizationInputComponent = new Component({ template, style, eventHandlers })

export default optimizationInputComponent