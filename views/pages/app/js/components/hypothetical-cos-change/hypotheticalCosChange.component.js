'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="form-title">
        <h1>Hypothetical COS Change</h1>
    </div>
    
    <div class="hypothetical_cos_calculator_inputs">
        <div class="hypothetical_cos_calculator_input_section">
            <div class="hypothetical_cos_calculator_row hypothetical_cos_calculator_row_f">
                <div class="hypothetical_cos_calculator_cell">Current Tier Spend</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="cos_spend_value" class="tbl_us2" value="5000">
                </div>
                <div style="clear: both;"></div>
            </div>

            <div class="hypothetical_cos_calculator_row">
                <div class="hypothetical_cos_calculator_cell">Current Tier Revenue</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="cos_revenue_value" class="tbl_us2" value="20000">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>

        <div class="hypothetical_cos_calculator_input_section" style="margin-right: 0px;">
            <div class="hypothetical_cos_calculator_row hypothetical_cos_calculator_row_f hypothetical_cos_calculator_addrs">
                <div class="hypothetical_cos_calculator_cell">Current COS</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="cos_current_cos_value" class="tbl_percent2" disabled>
                </div>
                <div style="clear: both;"></div>
            </div>

            <div class="hypothetical_cos_calculator_row">
                <div class="hypothetical_cos_calculator_cell">Hypothetical New COS</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="cos_new_cos_value" class="tbl_percent2" value="35">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>

    <div class="hypothetical_cos_calculator_results">
        <div id="hcoscontainer"></div>
        
        <div class="hypothetical_cos_calculator_row hypothetical_cos_calculator_row_f">Hypothetical New Spend: <span id="cos_hns" class="gc_results"></span></div>
        <div class="hypothetical_cos_calculator_row">Hypothetical New Revenue: <span id="cos_hnr" class="gc_results"></span></div>
        <div class="hypothetical_cos_calculator_divider"></div>
        <div class="hypothetical_cos_calculator_row">Incremental Spend: <span id="cos_is" class="gc_results"></span></div>
        <div class="hypothetical_cos_calculator_row">Incremental Revenue: <span id="cos_ir" class="gc_results"></span></div>
        <div class="hypothetical_cos_calculator_row">Incremental COS: <span id="cos_icos" class="gc_results"></span></div>
    </div>
</div>`

const style = ``
const eventHandlers = {}

const hypotheticalCosChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalCosChangeComponent