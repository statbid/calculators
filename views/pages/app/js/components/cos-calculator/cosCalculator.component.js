'use strict'

import { Component } from 'lib/component.class.js'

const template = `
<div id="cos-calc-component">
    
        <div class="form-title">
            <h1>COS Calculator</h1>
        </div>
        <p>Business Metrics</p>
        <div class="form-input">
            <label>Average Order Value</label><br>
            <input type="text" value="" placeholder="200" required>            
        </div>
        <div class="form-input">
            <label>Average Lifetime Revenue</label><br>
            <input type="text" value="" placeholder="250" required>
        </div>
        <div class="form-input">
            <label>Average Cost of Goods Sold</label><br>
            <input type="text" value="" placeholder="250" required>
        </div>
        <div class="form-input">
            <label>Average Shipping Costs</label><br>
            <input type="text" value="" placeholder="250" required>
        </div>
        <div class="form-input">
            <label>Average Lifetime Revenue</label><br>
            <input type="text" value="" placeholder="250" required>
        </div>
        <div class="form-input">
            <label>Average CC / Processing Fees</label><br>
            <input type="text" value="" placeholder="250" required>
        </div>
        <div class="form-input">
            <label>Other Per-Transaction Expenses</label><br>
            <input type="text" value="" placeholder="" required>
        </div>        
        <p>Optimization Options</p>
        <input type="radio" name="metric_optimize" value="0" id="metric_optimize_init" checked>
        <label for="metric_optimize_init">Initial</label>
        <input type="radio" name="metric_optimize" value="1" id="metric_optimize_life">
        <label for="metric_optimize_life">Lifetime</label>
    </div>
    <h2>Results</h2>
    <div class="metric_calculator_results">
        <div class="metric_calculator_name_section">New COS Targets for Variable Cost Channels</div>
        <div class="metric_calculator_row metric_calculator_row_f">Target Marginal COS: <span id="metric_marginal" class="gc_results">0 Days</span></div>
        <div class="metric_calculator_row">Target Paid COS: <span id="metric_paid" class="gc_results">0 Days</span></div>
    </div>

`

const style = ` 
.form-title {
    color: #f0f0f0;
    background-color: #004157;
    padding:10px;
    width:50%;
    text-align:center;
}
label{
    color:#939595;
    margin-bottom:20px;
}
input[type="text"]{
    color: white;
    font-size:16px;
    border: 1px solid #004157;
}
.form-input{
    padding:5px;
}
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
        /*background: #0c1a5b;*/
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
