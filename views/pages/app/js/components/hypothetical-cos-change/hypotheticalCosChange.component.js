'use strict'

import { Component } from 'lib/Component.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="hypothetical_cos_calculator_titel">Hypothetical COS Change</div>
    <div class="hypothetical_cos_calculator_divider"></div>
    
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

const style = `
.hypothetical_cos_calculator *,
    .hypothetical_cos_calculator::after,
    .hypothetical_cos_calculator::before {
        box-sizing: border-box;
    }

    .hypothetical_cos_calculator {
        position: relative;
        max-width: 720px;
        width: 100%;
        margin: 20px auto;
        background: #0c1a5b;
        padding: 35px 27px 20px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
    }

    .hypothetical_cos_calculator_titel {
        font-size: 38px;
        text-transform: capitalize;
        font-weight: 700;
        text-align: center;
        padding-bottom: 18px;
        color: #fff;
    }

    .hypothetical_cos_calculator_divider {
        background: rgba(245, 245, 245, .11);
        height: 2px;
        width: 75%;
        margin: 0 auto 10px;
    }

    .hypothetical_cos_calculator_input_section {
        float: left;
        width: calc(50% - 5px);
        margin-right: 10px;
        padding-top: 15px;
    }

    .hypothetical_cos_calculator_row {
        margin-bottom: 10px;
        box-shadow: 1px 1px 5px #060606;
        padding: 20px 0;
        background: #f5f5f5;
    }

    .hypothetical_cos_calculator input[type="text"] {
        width: 100%;
        max-width: 200px;
        border: 0;
        box-shadow: inset 1px 1px 5px #060606;
        background: #0c1a5b;
        padding: 5px 15px;
        color: #fff;
    }

    .hypothetical_cos_calculator_cell {
        float: left;
        width: 50%;
    }

    .hypothetical_cos_calculator_results {
        margin-top: 20px;
    }

    @media all and (max-width: 768px) {
        .hypothetical_cos_calculator_input_section {
            float: none;
            width: 100%;
            margin-right: 0;
        }

        .hypothetical_cos_calculator_results .hypothetical_cos_calculator_row span.gc_results {
            float: none;
            display: block;
            text-align: right;
        }
    }

    @media all and (max-width: 420px) {
        .hypothetical_cos_calculator_titel {
            font-size: 25px;
            line-height: 28px;
        }

        .hypothetical_cos_calculator .hypothetical_cos_calculator_cell {
            float: none;
            width: 100%;
        }

        .hypothetical_cos_calculator_row .hypothetical_cos_calculator_cell:nth-child(1) {
            margin-bottom: 12px;
        }
    }`
const eventHandlers = {}

const hypotheticalCosChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalCosChangeComponent