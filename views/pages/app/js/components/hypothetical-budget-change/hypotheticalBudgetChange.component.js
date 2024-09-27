'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="hypothetical_cos_calculator_titel">Hypothetical Budget Change</div>
    <div class="hypothetical_cos_calculator_divider"></div>
    
    <div class="hypothetical_cos_calculator_inputs">
        <div class="hypothetical_cos_calculator_input_section">
            <div class="hypothetical_cos_calculator_row hypothetical_cos_calculator_row_f">
                <div class="hypothetical_cos_calculator_cell">Current Tier Spend</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="budget_spend_value" class="tbl_us" value="5000">
                </div>
                <div style="clear: both;"></div>
            </div>

            <div class="hypothetical_cos_calculator_row">
                <div class="hypothetical_cos_calculator_cell">Current Tier Revenue</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="budget_revenue_value" class="tbl_us" value="20000">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>

        <div class="hypothetical_cos_calculator_input_section" style="margin-right: 0px;">
            <div class="hypothetical_cos_calculator_row hypothetical_cos_calculator_row_f hypothetical_cos_calculator_addrs">
                <div class="hypothetical_cos_calculator_cell">Current COS</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="budget_current_cos_value" class="tbl_percent" disabled>
                </div>
                <div style="clear: both;"></div>
            </div>

            <div class="hypothetical_cos_calculator_row">
                <div class="hypothetical_cos_calculator_cell">Hypothetical New Spend</div>
                <div class="hypothetical_cos_calculator_cell">
                    <input type="text" id="budget_new_cos_value" class="tbl_us" value="7500">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>

    <div class="hypothetical_cos_calculator_results">
        <div id="hcoscontainer" style="min-width: 380px"></div>
        <div class="hypothetical_cos_calculator_row hypothetical_cos_calculator_row_f">
            Hypothetical New COS: <span id="budget_hns" class="gc_results"></span>
        </div>
        <div class="hypothetical_cos_calculator_row">
            Hypothetical New Revenue: <span id="budget_hnr" class="gc_results"></span>
        </div>

        <div class="hypothetical_cos_calculator_divider"></div>

        <div class="hypothetical_cos_calculator_row">
            Incremental Spend: <span id="budget_is" class="gc_results"></span>
        </div>
        <div class="hypothetical_cos_calculator_row">
            Incremental Revenue: <span id="budget_ir" class="gc_results"></span>
        </div>
        <div class="hypothetical_cos_calculator_row">
            Incremental COS: <span id="budget_icos" class="gc_results"></span>
        </div>
    </div>
</div>

`

const style = `
    .hypothetical_cos_calculator *,
    .hypothetical_cos_calculator ::after,
    .hypothetical_cos_calculator ::before {
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

    .hypothetical_cos_calculator input[type=text] {
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
    }`

const eventHandlers = {}

const hypotheticalBudgetChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalBudgetChangeComponent