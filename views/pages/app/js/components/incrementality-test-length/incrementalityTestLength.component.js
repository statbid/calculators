'use strict'

import { Component } from 'lib/component.class.js'

const template = `<div id="bl_calculator">
    <div class="form-title">
        <h1>Incrementality Test Budget & Length Calculator</h1>
    </div>    
    <div class="bl_calculator_inputs">
        <div class="bl_calculator_input_section">
            <div class="bl_calculator_name_section">Sitewide Metrics</div>
            
            <div class="bl_calculator_row bl_calculator_row_f">
                <div class="bl_calculator_cell">Average Monthly Revenue (US)</div>
                <div class="bl_calculator_cell">
                    <input type="text" id="tbl_amr_value" class="tbl_us" value="50000">
                </div>
                <div style="clear: both;"></div>
            </div>
            
            <div class="bl_calculator_row">
                <div class="bl_calculator_cell">Average Monthly Orders (US)</div>
                <div class="bl_calculator_cell">
                    <input type="text" id="tbl_amo_value" class="tbl_num" value="411">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
        
        <div class="bl_calculator_input_section" style="margin-right: 0px;">
            <div class="bl_calculator_name_section">Test Parameters</div>
            
            <div class="bl_calculator_row bl_calculator_row_f">
                <div class="bl_calculator_cell">Expected ROAS</div>
                <div class="bl_calculator_cell">
                    <input type="text" id="tbl_roas_value" class="tbl_num" value="4">
                </div>
                <div style="clear: both;"></div>
            </div>
            
            <div class="bl_calculator_row">
                <div class="bl_calculator_cell">Monthly Test Budget</div>
                <div class="bl_calculator_cell">
                    <input type="text" id="tbl_mtb_value" class="tbl_us" value="500">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>
    
    <div class="bl_calculator_results">
        <div class="bl_calculator_name_section">Expected Test Length</div>
        
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
</div>`
const style = ``
const eventHandlers = {}

const incrementalityTestComponent = new Component({ template, style, eventHandlers })

export default incrementalityTestComponent