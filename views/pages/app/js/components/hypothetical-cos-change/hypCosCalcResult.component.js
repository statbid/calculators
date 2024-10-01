'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="calculator-results">

      <p class="sub-section-head">Results</p>

      <div class="result-dashboard">

          <div class="grid-cell">
              <p><span id="cos-hns" class="big-font"></span><br><br>
              <span class="sub-title">Hypothetical New Spend</span></p>
          </div>
          
          <div class="grid-cell">
              <p><span id="cos-hnr" class="big-font"></span><br><br>
              <span class="sub-title">Hypothetical New Revenue</span></p>
          </div>

          <div class="grid-cell">
              <p><span id="cos-is" class="big-font"></span><br><br>
              <span class="sub-title">Incremental Spend</span></p>
          </div>

          <div class="grid-cell">
              <p><span id="cos-ir" class="big-font"></span><br><br>
              <span class="sub-title">Incremental Revenue</span></p>
          </div>

          <div class="grid-cell">
              <p><span id="cos-icos" class="big-font"></span><br><br>
              <span class="sub-title">Incremental COS</span></p>
          </div>

      </div>

  </div>
`
const style = ``

const eventHandlers = {}

const hypCosCalcresultComponent = new Component({ template, style, eventHandlers })

export default hypCosCalcresultComponent