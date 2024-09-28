'use strict'

import { Component } from 'lib/component.class.js'
import { CosCalculator } from '../../services/cosCalculator.class.js'
//import jQuery from 'jquery'
//import { autoNumeric } from 'autoNumeric'

const template = `
<div id="cos-calc-component">
    <div class="form-title">
        <p>COS Calculator</p>
    </div>
    <div class="grid-container calc-main">        
        <div class="form-body flex-column" id="metric-calculator">
            <p class="sub-section-head bottom-border-thick">Business Metrics</p>
            <div class="form-input" >
                <label for="metric_order" class="label">Average Order Value</label>
                <input type="text" id="metric-order" class="metric_us" value="200">
            </div>
            <div class="form-input">
                <label>Average Lifetime Revenue</label>
                <input type="text" id="metric-revenue" class="metric_us" value="250">
            </div>
            <div class="form-input">
                <label>Average Cost of Goods Sold</label>
                <input type="text" id="metric-goods" class="metric_percent" value="50">
            </div>
            <div class="form-input">
                <label>Average Shipping Costs</label>
                <input type="text" id="metric-ship" class="metric_percent" value="12">
            </div>
            <div class="form-input">
                <label>Average CC / Processing Fees</label>
                <input type="text" id="metric-fee" class="metric_percent" value="2.9">
            </div>
            <div class="form-input">
                <label>Other Per-Transaction Expenses</label>
                <input type="text" id="metric-expense" class="metric_percent" value="5.0">
            </div>
            <div class="form-input">
                <label>Optimization Options</label>
                <input type="radio" name="metric-optimize" value="0" id="metric_optimize_init" checked>
                <label for="metric_optimize_init">Initial</label>
                <input type="radio" name="metric-optimize" value="1" id="metric_optimize_life">
                <label for="metric_optimize_life">Lifetime</label>
            </div>
        </div>
        <div class="calculator_results">
            <p class="sub-section-head bottom-border-thick">New COS Targets for Variable Cost Channels</p>
            <div class="flex-container">
                <div>
                    <p class="grid-cell"><span id="metric_marginal" class="big-font">0 Days</span><br><br><span class="sub-title">Target Marginal COS</span></p>
                </div>
                <div>
                    <p class="grid-cell"><span id="metric_paid" class="big-font">0 Days</span><br><br><span class="sub-title">Target Paid COS</span></p>
                </div>
            </div>
        </div>
    </div>    
</div>
`

const style = `
.label {
    padding: 0px 0px 10px 0px;
}
.bold-white {
    color:white;
    font-weight:600;
}
.bold-light-white {
    color: rgba(240, 250, 250, 0.8)
}
.sub-title {
    color: #0081a7;
    font-weight:600;
}
.sub-section-head {
    /*color: #0081a7;*/
    color: rgba(20, 240, 250, 0.8);
    padding: 3%;
    font-size:1.2rem;
    font-weight:600;
    border: 1px solid #004157;
    background-color: rgba(220, 220, 255, 0.1);
    border-radius: 5px;    
}

.big-font {    
    font-weight:600;
    font-size:3rem;
}
.calc-main{
    margin-bottom:2%;
}
.flex-column {
    flex:1;
    padding:20%;    
}
.head-card {
    
}
.form-title {
    color: #f0f0f0;
    background-color: #004157;
    padding:0.5% 3%;
    font-size:1.5rem;
    font-weight:600;
    border-radius: 5px 5px 0px 0px;        
}

.flex-container {
    display:flex;
    flex-direction:row;    
}
.grid-cell {
    padding: 1rem;
    text-align:center;
    border: 2px solid #004157;
    margin: 1rem;
    border-radius:5px;    
}
.grid-container {
    display:grid;    
    grid-template-columns: 50% 50%;
}
.metrics-calculator {    
    /*
    border-radius: 5px;
    border: 1px solid #004157;*/    
}

.calculator_results, .form-body {    
    padding:1% 3% 5% 3%;
    background-color: #10151f;    
}
.calculator_results {    
    /*background-color: #0f151f;*/
    border-radius: 0px 0px 5px 0px;
}

.form-body {
    /*background-color: #0f101f;*/
    border-radius: 0px 5px 0px 0px;    
}

label {
    margin-bottom:20px;    
    width:5%;
}

input[type="radio"] {    
    border: 1px solid white;
}
input[type="text"]{
    color: #0091cf;
    font-weight: 600;
    font-size:16px;
    padding: 10px 8px;
    width: 30%;
    border: 1px solid #004157;
    background-color: #0f101f;               
}
.form-input{
    padding: 3% 3% 6% 3%;
    border: 1px solid #004157;
    border-radius: 5px;
    margin-bottom:0.5rem;
    background-color: rgba(50,150, 190, 0.1);
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
        color: #0081a7;
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
        color: #0081a7;
    }`

const eventHandlers = {
    cosCalculatorComponentHandler: () => {
        const orderEl = document.getElementById("metric-order")
        const revenueEl = document.getElementById("metric-revenue")
        const goodsEl = document.getElementById("metric-goods")
        const shipEl = document.getElementById("metric-ship")
        const feeEl = document.getElementById("metric-fee")
        const expenseEl = document.getElementById("metric-expense")
        const optmizeEls = document.getElementsByName("metric-optimize")
        if (orderEl && revenueEl && goodsEl && shipEl && feeEl && expenseEl && optmizeEls) {
            CosCalculator.setResult()
            document.querySelectorAll("#metric-calculator input").forEach(el => {
                el.onchange = async (e) => CosCalculator.setResult()
            })
        }
    }
}

const cosCalculatorComponent = new Component({ template, style, eventHandlers })

export default cosCalculatorComponent
