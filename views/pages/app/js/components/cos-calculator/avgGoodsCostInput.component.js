'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">
      <label>Average Cost of Goods Sold</label>
    </div>
    <div class="input-container">
      <input type="text" id="metric-goods" class="metric_percent" value="50">
    </div>
  </div>
`

const style = ``

const eventHandlers = {}

const avgGoodsCostInputComponent = new Component({ template, style, eventHandlers })

export default avgGoodsCostInputComponent