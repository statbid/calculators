'use strict'

import { Component } from 'lib/component.class.js'
import avgOrderValInputComponent from './avgOrderValInput.component.js'
import avgLifeTimeRevInputComponent from './avgLifeTimeRevInput.component.js'
import avgGoodsCostInputComponent from './avgGoodsCostInput.component.js'
import avgShipCostInputComponent from './avgShipCostInput.component.js'
import avgCcFeeInputComponent from './avgCcFeeInput.component.js'
import otherTransCostInputComponent from './otherTransCostInput.component.js'
import optimizationInputComponent from './optimizationInput.component.js'

const template = `
<div class="form-body" id="cos-calculator">
    <p class="sub-section-head bottom-border-thick">Business Metrics</p>
    ${avgOrderValInputComponent.template}
    ${avgLifeTimeRevInputComponent.template}
    ${avgGoodsCostInputComponent.template}
    ${avgShipCostInputComponent.template}
    ${avgCcFeeInputComponent.template}
    ${otherTransCostInputComponent.template} 
    ${optimizationInputComponent.template}
</div>
`

const style = `

  @media only screen and (min-width: 600px){

  }

  @media only screen and (min-width: 768px){

  }
`

const eventHandlers = {}

const cosCalcFormBodyComponent = new Component({ template, style, eventHandlers })

export default cosCalcFormBodyComponent