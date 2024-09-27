'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div class="hypothetical_cos_calculator">
    <div class="form-title">
        <h1>Hypothetical Budget Change</h1>
    </div>
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

const style = ``

const eventHandlers = {}

const hypotheticalBudgetChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalBudgetChangeComponent