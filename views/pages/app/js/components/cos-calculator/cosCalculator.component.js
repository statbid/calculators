'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="metric_calculator">
    <div class="metric_calculator_title">COS Calculator</div>
    <div class="metric_calculator_divider"></div>

    <div class="metric_calculator_inputs">
        <div class="metric_calculator_name_section">Business Metrics</div>
        <div class="metric_calculator_input_section">

            <!-- Average Order Value -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Average Order Value</div>
                <div class="metric_calculator_cell">
                    <input type="text" id="metric_order" class="metric_us" value="200">
                </div>
                <div style="clear: both;"></div>
            </div>

            <!-- Average Lifetime Revenue -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Average Lifetime Revenue</div>
                <div class="metric_calculator_cell">
                    <input type="text" id="metric_revenue" class="metric_us" value="250">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>

        <div class="metric_calculator_input_section">
            <!-- Average Cost of Goods Sold -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Average Cost of Goods Sold</div>
                <div class="metric_calculator_cell">
                    <input type="text" id="metric_goods" class="metric_percent" value="50">
                </div>
                <div style="clear: both;"></div>
            </div>

            <!-- Average Shipping Costs -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Average Shipping Costs</div>
                <div class="metric_calculator_cell">
                    <input type="text" id="metric_ship" class="metric_percent" value="12">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>

        <div class="metric_calculator_input_section">
            <!-- Average CC / Processing Fees -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Average CC / Processing Fees</div>
                <div class="metric_calculator_cell">
                    <input type="text" id="metric_fee" class="metric_percent" value="2.9">
                </div>
                <div style="clear: both;"></div>
            </div>

            <!-- Other Per-Transaction Expenses -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Other Per-Transaction Expenses</div>
                <div class="metric_calculator_cell">
                    <input type="text" id="metric_expens" class="metric_percent" value="0">
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>

    <div class="metric_calculator_inputs">
        <div class="metric_calculator_name_section">Optimization Options</div>
        <div class="metric_calculator_input_section metric_calculator_optimization">

            <!-- Optimize for Initial or Lifetime profit -->
            <div class="metric_calculator_row">
                <div class="metric_calculator_cell">Optimize for Initial or Lifetime profit?</div>
                <div class="metric_calculator_cell">
                    <div class="metric_calculator_switch">
                        <input type="radio" name="metric_optimize" value="0" id="metric_optimize_init" checked>
                        <label for="metric_optimize_init">Initial</label>
                        <input type="radio" name="metric_optimize" value="1" id="metric_optimize_life">
                        <label for="metric_optimize_life">Lifetime</label>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>
        </div>
    </div>

    <div class="metric_calculator_results">
        <div class="metric_calculator_name_section">New COS Targets for Variable Cost Channels</div>
        <div class="metric_calculator_row metric_calculator_row_f">Target Marginal COS: <span id="metric_marginal" class="gc_results">0 Days</span></div>
        <div class="metric_calculator_row">Target Paid COS: <span id="metric_paid" class="gc_results">0 Days</span></div>
    </div>
</div>
`

const style = ` 
/* General styles */
    #metric_calculator *,
    #metric_calculator ::after,
    #metric_calculator ::before {
        box-sizing: border-box;
    }

    #metric_calculator {
        position: relative;
        max-width: 720px;
        width: 100%;
        margin: 20px auto;
        background: #0c1a5b;
        padding: 35px 27px 20px;
    }

    #metric_calculator .metric_calculator_switch input {
        position: absolute !important;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        width: 1px;
        border: 0;
        overflow: hidden;
    }

    /* Styling other elements */
    .metric_calculator_titel {
        font-size: 38px;
        text-transform: capitalize;
        font-weight: 700;
        text-align: center;
        padding-bottom: 18px;
        color: #fff;
    }

    .metric_calculator_divider {
        background: rgba(245, 245, 245, .11);
        height: 2px;
        width: 75%;
        margin: 0 auto 10px;
    }

    /* Input styles */
    #metric_calculator input[type=text] {
        width: 100%;
        max-width: 200px;
        border: 0;
        box-shadow: inset 1px 1px 5px #060606;
        background: #0c1a5b;
        padding: 5px 15px;
        color: #fff;
    }`

const eventHandlers = {}

const cosCalculatorComponent = new Component({ template, style, eventHandlers })

export default cosCalculatorComponent
