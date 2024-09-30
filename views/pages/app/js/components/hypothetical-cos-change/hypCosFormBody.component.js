'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-body" id="hyp-cos-change">

      <div class="form-input">
          <div class="label-container">
              <label>Current Tier Spend</label>
          </div>
          <div class="input-container">
              <input type="text" id="cos-spend-value" class="tbl-us2" value="5000">
          </div>                
      </div>

      <div class="form-input">
          <div class="label-container">
              <label>Current Tier Revenue</label>
          </div>
          <div class="input-container">
              <input type="text" id="cos-revenue-value" class="tbl-us2" value="20000">
          </div>                
      </div>

      <div class="form-input">
          <div class="label-container">
              <label>Current COS</label>
          </div>
          <div class="input-container">
              <input type="text" id="cos-current-cos-value" class="tbl-percent2" disabled>
          </div>                
      </div>

      <div class="form-input">
          <div class="label-container">
              <label>Hypothetical New COS</label>
          </div>
          <div class="input-container">
              <input type="text" id="cos-new-cos-value" class="tbl-percent2" value="35">
          </div>                
      </div>
      
  </div>
`

const style = ``

const eventHandlers = {}

const hypCosFormBodyComponent = new Component({ template, style, eventHandlers })

export default hypCosFormBodyComponent