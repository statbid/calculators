'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="form-title">
        <p>Hypothetical Budget Change</p>
    </div>
    <div class="calc-main">
        <div class="form-body">
            <div class="form-input">
                <div class="label-container">
                    <label>Current Tier Spend</label>
                </div>
                <div class="input-container">
                    <input type="text" id="budget_spend_value" class="tbl_us" value="5000">
                </div>                
            </div>
            <div class="form-input">
                <div class="label-container">
                    <label>Current Tier Revenue</label>
                </div>
                <div class="input-container">
                    <input type="text" id="budget_revenue_value" class="tbl_us" value="20000">
                </div>
            </div>        
            <div class="form-input">
                <div class="label-container">
                    <label>Current COS</label>
                </div>
                <div class="input-container">
                    <input type="text" id="budget_current_cos_value" class="tbl_percent" disabled>
                </div>                
            </div>
            <div class="form-input">
                <div class="label-container">
                    <label>Hypothetical New Spend</label>
                </div>
                <div class="input-container">
                    <input type="text" id="budget_new_cos_value" class="tbl_us" value="7500">
                </div>                
            </div>
        </div>
        <div class="calculator-results">
            <p class="sub-section-head bottom-border-thick">Results</p>
            <div class="result-dashboard">
                <div>   
                    <p class="grid-cell"><span id="budget_hns" class="big-font"></span><br><br>
                    <span class="sub-title">Hypothetical New COS</span></p>
                </div>
                <div>
                    <p class="grid-cell"><span id="budget_hnr" class="big-font"></span><br><br>
                    <span class="sub-title">Hypothetical New Revenue</span></p>
                </div>
                <div>
                    <p class="grid-cell"><span id="budget_is" class="big-font"></span><br><br>
                    <span class="sub-title">Incremental Spend</span></p>
                </div>
                <div>
                    <p class="grid-cell"><span id="budget_ir" class="big-font"></span><br><br>
                    <span class="sub-title">Incremental Revenue</span></p>
                </div>
                <div>
                    <p class="grid-cell"><span id="budget_icos" class="big-font"></span><br><br>
                    <span class="sub-title">Incremental COS</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
`

const style = ``

const eventHandlers = {}

const hypotheticalBudgetChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalBudgetChangeComponent