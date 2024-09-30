'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">
      <label for="metric_order" class="label-container">Average Order Value</label>
    </div>
    <div class="input-container">
      <input type="text" id="metric-order" class="metric_us" value="200">
    </div>
  </div>
`

const style = ``

const eventHandlers = {}

const avgOrderValInputComponent = new Component({ template, style, eventHandlers })

export default avgOrderValInputComponent