'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="bl_calculator">
    <div class="form-title">
        <p>Incrementality Test Budget & Length Calculator</p>
    </div>
    <div class="calc-main">    
        <div class="form-body">

            <p class="sub-section-head">Sitewide Metrics</p>
            
            <div class="form-input">
                <div class="label-container">
                    <label>Average Monthly Revenue (US)</label>
                </div>
                <div class="input-container">
                    <input type="text" id="tbl_amr_value" class="tbl_us" value="50000">
                </div>            
            </div>
            
            <div class="form-input">
                <div class="label-container">
                    <label>Average Monthly Orders (US)</label>
                </div>
                <div class="input-container">
                    <input type="text" id="tbl_amo_value" class="tbl_num" value="411">
                </div>            
            </div>

            <p class="sub-section-head">Test Parameters</p>
            
            <div class="form-input">
                <div class="label-container">
                    <label>Expected ROAS</label>
                </div>
                <div class="input-container">
                    <input type="text" id="tbl_roas_value" class="tbl_num" value="4">
                </div>            
            </div>
            
            <div class="form-input">
                <div class="label-container">
                    <label>Monthly Test Budget</label>
                </div>
                <div class="input-container">
                    <input type="text" id="tbl_mtb_value" class="tbl_us" value="500">
                </div>            
            </div>
            
        </div>
        
        <div class="calculator-results">
            <p class="sub-section-head">Expected Test Length</p>
            
            <div class="bl_calculator_results_row bl_calculator_results_row_ma">
                <div class="bl_calculator_results_row_cell">&nbsp;</div>
                <div class="bl_calculator_results_row_cell">Min</div>
                <div class="bl_calculator_results_row_cell">Max</div>
            </div>
            
            <div class="bl_calculator_results_row bl_calculator_row bl_calculator_row_f">
                <div class="bl_calculator_results_row_cell">Until Yes/No of added value:</div>
                <div class="bl_calculator_results_row_cell"><span id="tbl_yn_min" class="gc_results">0 Days</span></div>
                <div class="bl_calculator_results_row_cell"><span id="tbl_yn_max" class="gc_results">0 Days</span></div>
            </div>
            
            <div class="bl_calculator_results_row bl_calculator_row bl_calculator_row_f">
                <div class="bl_calculator_results_row_cell">Until precise lift estimate:</div>
                <div class="bl_calculator_results_row_cell"><span class="gc_results">up to</span></div>
                <div class="bl_calculator_results_row_cell"><span id="tbl_le" class="gc_results">0 Days</span></div>
            </div>
        </div>
    </div>
</div>`
const style = ``
const eventHandlers = {}

const incrementalityTestComponent = new Component({ template, style, eventHandlers })

export default incrementalityTestComponent