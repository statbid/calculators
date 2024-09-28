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
const style = `#bl_calculator,
    #bl_calculator * {
        box-sizing: border-box;
        line-height: 1.6;
    }

    #bl_calculator {
        position: relative;
        max-width: 720px;
        width: 100%;
        margin: 20px auto;
        background: #0C1A5B;
        padding: 35px 27px 20px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
    }

    .bl_calculator_titel {
        font-size: 38px;
        text-transform: capitalize;
        font-weight: 700;
        text-align: center;
        padding-bottom: 18px;
        color: #fff;
    }

    .bl_calculator_divider {
        background: rgba(245, 245, 245, .11);
        height: 2px;
        width: 75%;
        margin: 0 auto 10px;
    }

    .bl_calculator_input_section {
        float: left;
        width: calc(50% - 5px);
        margin-right: 10px;
        padding-top: 15px;
    }

    .bl_calculator_row {
        margin-bottom: 10px;
        padding: 20px 0;
        background: #f5f5f5;
        box-shadow: 1px 1px 5px #060606;
    }

    .bl_calculator input[type="text"] {
        width: 100%;
        max-width: 200px;
        border: 0;
        box-shadow: inset 1px 1px 5px #060606;
        background: #0C1A5B;
        padding: 5px 15px;
        color: #fff;
    }

    .bl_calculator_cell {
        float: left;
        width: 50%;
    }

    .bl_calculator_results {
        margin-top: 20px;
    }

    @media all and (max-width: 768px) {
        .bl_calculator_input_section {
            float: none;
            width: 100%;
            margin-right: 0;
        }
    }

    @media all and (max-width: 420px) {
        .bl_calculator_titel {
            font-size: 25px;
            line-height: 28px;
        }

        .bl_calculator .bl_calculator_cell {
            float: none;
            width: 100%;
        }
    }`
const eventHandlers = {}

const incrementalityTestComponent = new Component({ template, style, eventHandlers })

export default incrementalityTestComponent