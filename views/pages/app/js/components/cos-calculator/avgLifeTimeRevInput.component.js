'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-input">
    <div class="label-container">
      <label>Average Lifetime Revenue</label>
    </div>
    <div class="input-container">
      <input type="text" id="metric-revenue" class="metric_us" value="250">
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

const avgLifeTimeRevInputComponent = new Component({ template, style, eventHandlers })

export default avgLifeTimeRevInputComponent