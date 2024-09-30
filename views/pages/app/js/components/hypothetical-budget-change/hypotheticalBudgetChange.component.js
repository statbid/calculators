'use strict'

import { Component } from 'lib/component.class.js'
import { HypotheticalBudgetChange } from '../../services/hypotheticalBudgetChange.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="form-title">
        <p>Hypothetical Budget Change</p>
    </div>
    <div class="calc-main">
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
        <div class="calculator-results">
            <p class="sub-section-head">Results</p>
            <div class="result-dashboard">
                <div class="grid-cell">   
                    <p><span id="budget-hns" class="big-font"></span><br><br>
                    <span class="sub-title">Hypothetical New COS</span></p>
                </div>
                <div class="grid-cell">
                    <p><span id="budget-hnr" class="big-font"></span><br><br>
                    <span class="sub-title">Hypothetical New Revenue</span></p>
                </div>
                <div class="grid-cell">
                    <p><span id="budget-is" class="big-font"></span><br><br>
                    <span class="sub-title">Incremental Spend</span></p>
                </div>
                <div class="grid-cell">
                    <p><span id="budget-ir" class="big-font"></span><br><br>
                    <span class="sub-title">Incremental Revenue</span></p>
                </div>
                <div class="grid-cell">
                    <p><span id="budget-icos" class="big-font"></span><br><br>
                    <span class="sub-title">Incremental COS</span></p>
                </div>
            </div>
        </div>
    </div>
</div>
`

const style = ``

const eventHandlers = {
    hypotheticalBudgetChangeComponentHandler: () => {
        const spendEl = document.getElementById("budget-spend-value")
        const revenueEl = document.getElementById("budget-revenue-value")
        const newCosEl = document.getElementById("budget-new-cos-value")

        if (spendEl && revenueEl && newCosEl) {
            HypotheticalBudgetChange.setResult()
            document.querySelectorAll("#hyp-budget-change input").forEach(el => {
                el.onchange = async (e) => HypotheticalBudgetChange.setResult()
            })
        }
    }
}


const hypotheticalBudgetChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalBudgetChangeComponent