'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="form-title">
        <p>Hypothetical COS Change</p>
    </div>
    <div class="calc-main">
        <div class="form-body">

            <div class="form-input">
                <div class="label-container">
                    <label>Current Tier Spend</label>
                </div>
                <div class="input-container">
                    <input type="text" id="cos_spend_value" class="tbl_us2" value="5000">
                </div>                
            </div>

            <div class="form-input">
                <div class="label-container">
                    <label>Current Tier Revenue</label>
                </div>
                <div class="input-container">
                    <input type="text" id="cos_revenue_value" class="tbl_us2" value="20000">
                </div>                
            </div>

            <div class="form-input">
                <div class="label-container">
                    <label>Current COS</label>
                </div>
                <div class="input-container">
                    <input type="text" id="cos_current_cos_value" class="tbl_percent2" disabled>
                </div>                
            </div>

            <div class="form-input">
                <div class="label-container">
                    <label>Hypothetical New COS</label>
                </div>
                <div class="input-container">
                    <input type="text" id="cos_new_cos_value" class="tbl_percent2" value="35">
                </div>                
            </div>
            
        </div>

        <div class="calculator-results">            
            <div>
                <p class="grid-cell"><span id="cos_hns" class="big-fonts"></span><br><br>
                <span class="sub-title">Hypothetical New Spend</span></p>
            </div>
            <div>
                <p class="grid-cell"><span id="cos_hnr" class="big-fonts"></span><br><br>
                <span class="sub-title">Hypothetical New Revenue</span></p>
            </div>            
            <div>
                <p class="grid-cell"><span id="cos_is" class="big-fonts"></span><br><br>
                <span class="sub-title">Incremental Spend</span></p>
            </div>
            <div>
                <p class="grid-cell"><span id="cos_ir" class="big-fonts"></span><br><br>
                <span class="sub-title">Incremental Revenue</span></p>
            </div>
            <div>
                <p class="grid-cell"><span id="cos_icos" class="big-fonts"></span><br><br>
                <span class="sub-title">Incremental COS</span></p>
            </div>
        </div>
    </div>
</div>`

const style = ``
const eventHandlers = {}

const hypotheticalCosChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalCosChangeComponent