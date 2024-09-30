'use strict'

import { Component } from 'lib/component.class.js'


const template = `
  <div class="form-body" id="inc-test-length">
      <p class="sub-section-head">Sitewide Metrics</p>            
      <div class="form-input">
          <div class="label-container">
              <label>Average Monthly Revenue (US)</label>
          </div>
          <div class="input-container">
              <input type="text" id="tbl-amr-value" class="tbl-us" value="50000">
          </div>            
      </div>
      
      <div class="form-input">
          <div class="label-container">
              <label>Average Monthly Orders (US)</label>
          </div>
          <div class="input-container">
              <input type="text" id="tbl-amo-value" class="tbl-num" value="411">
          </div>            
      </div>

      <p class="sub-section-head">Test Parameters</p>
      
      <div class="form-input">
          <div class="label-container">
              <label>Expected ROAS</label>
          </div>
          <div class="input-container">
              <input type="text" id="tbl-roas-value" class="tbl-num" value="4">
          </div>            
      </div>
      
      <div class="form-input">
          <div class="label-container">
              <label>Monthly Test Budget</label>
          </div>
          <div class="input-container">
              <input type="text" id="tbl-mtb-value" class="tbl-us" value="500">
          </div>            
      </div>

  </div>

`

const style = ``

const eventHandlers = {}

const incTestFormBodyComponent = new Component({ template, style, eventHandlers })

export default incTestFormBodyComponent