'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="calculator-results">

    <p class="sub-section-head">Expected Test Length</p>

    <div class="result-dashboard">

        <div class="grid-cell">                    
            <p><span class="label">Min</span> <span id="tbl-yn-min" class="big-font">0 Days</span><br><br>
                <span class="label">Max</span> <span id="tbl-yn-max" class="big-font">0 Days</span><br></br>
            <span class="sub-title">Until Yes/No of added value</span>
            </p>                    
        </div>

        <div class="grid-cell">
            <p><span>Up to</span> <span id="tbl-le" class="big-font">0 Days</span><br><br><span class="sub-title">Until precise lift estimate</span></p>
        </div>

    </div>
    
  </div>
`

const style = ``

const eventHandlers = {}

const incTestCalcResultComponent = new Component({ template, style, eventHandlers })

export default incTestCalcResultComponent