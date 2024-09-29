'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-title">
    <p>COS Calculator</p>
  </div>
`

const style = `

  @media only screen and (min-width: 600px){

  }

  @media only screen and (min-width: 768px){

  }
`

const eventHandlers = {}

const cosCalcTitleComponent = new Component({ template, style, eventHandlers })

export default cosCalcTitleComponent