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

const style = `

  @media only screen and (min-width: 600px){

  }

  @media only screen and (min-width: 768px){

  }
`

const eventHandlers = {}

const avgGoodsCostInputComponent = new Component({ template, style, eventHandlers })

export default avgGoodsCostInputComponent