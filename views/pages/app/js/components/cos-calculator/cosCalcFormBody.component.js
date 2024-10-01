'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-body" id="cos-calculator-form">

    <p class="sub-section-head">Business Metrics</p>

    <div class="form-input">
      <div class="label-container">
        <label for="metric_order" class="label-container">Average Order Value</label>
      </div>
      <div class="input-container">
        <input type="text" id="metric-order" class="metric_us" value="2000">
      </div>
    </div>

    <div class="form-input">
      <div class="label-container">
        <label>Average Lifetime Revenue</label>
      </div>
      <div class="input-container">
        <input type="text" id="metric-revenue" class="metric_us" value="250">
      </div>
    </div>

    <div class="form-input">
      <div class="label-container">
        <label>Average Cost of Goods Sold</label>
      </div>
      <div class="input-container">
        <input type="text" id="metric-goods" class="metric_percent" value="50">
      </div>
    </div>

    <div class="form-input">
      <div class="label-container">
        <label>Average Shipping Costs</label>
      </div>
      <div class="input-container">
        <input type="text" id="metric-ship" class="metric_percent" value="12">
      </div>
    </div>

    <div class="form-input">
      <div class="label-container">
        <label>Average CC / Processing Fees</label>
      </div>
      <div class="input-container">
        <input type="text" id="metric-fee" class="metric_percent" value="2.9">
      </div>
    </div>

    <div class="form-input">
      <div class="label-container">
        <label>Other Per-Transaction Expenses</label>
      </div>
      <div class="input-container">
        <input type="text" id="metric-expense" class="metric_percent" value="5.0">
      </div>
    </div>  

    <div class="form-input">
      <div class="label-container">            
        <label>Optimization Options</label>
      </div>
      <div class="input-container">
        <input type="radio" name="metric-optimize" value="0" id="metric_optimize_init" checked>
        <label for="metric_optimize_init">Initial</label>
        <input type="radio" name="metric-optimize" value="1" id="metric_optimize_life">
        <label for="metric_optimize_life">Lifetime</label>
      </div>
    </div>

  </div>
`

const style = ``

const eventHandlers = {}

const cosCalcFormBodyComponent = new Component({ template, style, eventHandlers })

export default cosCalcFormBodyComponent