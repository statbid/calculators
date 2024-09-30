'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">
      <label>Average CC / Processing Fees</label>
    </div>
    <div class="input-container">
      <input type="text" id="metric-fee" class="metric_percent" value="2.9">
    </div>
  </div>
`

const style = ``

const eventHandlers = {}

const avgCcFeeInputComponent = new Component({ template, style, eventHandlers })

export default avgCcFeeInputComponent