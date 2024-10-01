'use strict'

import { Component } from 'lib/component.class.js'

const template = `
  <div class="form-body" id="hyp-budget-change">

    <div class="form-input">
        <div class="label-container">
            <label>Current Tier Spend</label>
        </div>
        <div class="input-container">
            <input type="text" id="budget-spend-value" class="tbl-us" value="5000">
        </div>                
    </div>

    <div class="form-input">
        <div class="label-container">
            <label>Current Tier Revenue</label>
        </div>
        <div class="input-container">
            <input type="text" id="budget-revenue-value" class="tbl-us" value="20000">
        </div>
    </div>

    <div class="form-input">
        <div class="label-container">
            <label>Current COS</label>
        </div>
        <div class="input-container">
            <input type="text" id="budget-current-cos-value" class="tbl-percent" disabled>
        </div>                
    </div>

    <div class="form-input">
        <div class="label-container">
            <label>Hypothetical New Spend</label>
        </div>
        <div class="input-container">
            <input type="text" id="budget-new-cos-value" class="tbl-us" value="7500">
        </div>                
    </div>
    
</div>
`

const style = ``

const eventHandlers = {}

const hypBudgetFormBodyComponent = new Component({ template, style, eventHandlers })

export default hypBudgetFormBodyComponent