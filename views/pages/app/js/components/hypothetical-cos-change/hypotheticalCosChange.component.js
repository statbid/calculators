'use strict'

import { Component } from 'lib/component.class.js'
import { HypotheticalCosChange } from '../../services/hypotheticalCosChange.class.js'

const template = `
<div class="hypothetical-cos-calculator">
    <div class="form-title">
        <p>Hypothetical COS Change</p>
    </div>
    <div class="calc-main">
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
    </div>
</div>`

const style = ``
const eventHandlers = {
    hypotheticalCosChangeComponentHandler: () => {
        const spendEl = document.getElementById("cos-spend-value")
        const revenueEl = document.getElementById("cos-revenue-value")
        const newCosEl = document.getElementById("cos-new-cos-value")

        if (spendEl && revenueEl && newCosEl) {
            HypotheticalCosChange.setResult()
            document.querySelectorAll("#hyp-cos-change input").forEach(el => {
                el.onchange = async (e) => HypotheticalCosChange.setResult()
            })
        }
    }
}

const hypotheticalCosChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalCosChangeComponent