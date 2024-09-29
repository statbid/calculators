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

    <div class="calc-main">

        <div class="form-body" id="metric-calculator">
            <p class="sub-section-head bottom-border-thick">Business Metrics</p>

            <div class="form-input" >
                <div class="label">
                    <label for="metric_order" class="label">Average Order Value</label>
                </div>
                <div class="input">
                    <input type="text" id="metric-order" class="metric_us" value="200">
                </div>
            </div>

            <div class="form-input">
                <div class="label">
                    <label>Average Lifetime Revenue</label>
                </div>
                <div class="input">
                    <input type="text" id="metric-revenue" class="metric_us" value="250">
                </div>
            </div>

            <div class="form-input">
                <div class="label">
                    <label>Average Cost of Goods Sold</label>
                </div>
                <div class="input">
                    <input type="text" id="metric-goods" class="metric_percent" value="50">
                </div>
            </div>

            <div class="form-input">
                <div class="label">
                    <label>Average Shipping Costs</label>
                </div>
                <div class="input">
                    <input type="text" id="metric-ship" class="metric_percent" value="12">
                </div>
            </div>

            <div class="form-input">
                <div class="label">
                    <label>Average CC / Processing Fees</label>
                </div>
                <div class="input">
                    <input type="text" id="metric-fee" class="metric_percent" value="2.9">
                </div>
            </div>

            <div class="form-input">
                <div class="label">
                    <label>Other Per-Transaction Expenses</label>
                </div>
                <div class="input">
                    <input type="text" id="metric-expense" class="metric_percent" value="5.0">
                </div>
            </div>

            <div class="form-input">
                <div class="label">            
                    <label>Optimization Options</label>
                </div>
                <div class="input">
                    <input type="radio" name="metric-optimize" value="0" id="metric_optimize_init" checked>
                    <label for="metric_optimize_init">Initial</label>
                    <input type="radio" name="metric-optimize" value="1" id="metric_optimize_life">
                    <label for="metric_optimize_life">Lifetime</label>
                </div>
            </div>

        </div>

        <div class="calculator_results">
            <p class="sub-section-head bottom-border-thick">New COS Targets for Variable Cost Channels</p>
            <div id="result-dashboard">
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
    color: rgba(20, 240, 250, 0.8);
    padding:3%;
    font-size:1.1rem;
    font-weight:600;
    border: 1px solid #004157;
    background-color: rgba(220, 220, 255, 0.1);
    border-radius: 5px;
    text-align:center;   
}

.big-font {    
    font-weight:600;
    font-size: 3rem;
}

.calc-main {
    margin-bottom:2%;
    background-color: #10151f;    
}
.flex-column {
    flex:1;
    padding:20%;    
}
.form-title {
    color: #f0f0f0;
    background-color: #004157;
    padding:0.1% 3%;
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
        
}
.calculator_results {    
    /*background-color: #0f151f;*/
    border-radius: 0px 0px 5px 0px;
}

.form-body {
    /*background-color: #0f101f;*/
    border-radius: 0px 5px 0px 0px;
}


input[type="radio"] {    
    border: 1px solid white;
}

input[type="text"]{
    color: #0091cf;
    font-weight: 600;
    font-size:16px;
    padding: 3% 2%;    
    border: 1px solid #004157;
    background-color: #0f101f;
    width:90%;   
}
    
.form-input{
    padding: 1% 1% 5% 1%;
    border: 1px solid #004157;
    border-radius: 5px;
    margin:0.2rem;
    background-color: rgba(50,150, 190, 0.1);    
}


@media only screen and (min-width: 600px){

}

@media only screen and (min-width: 768px){
    input[type="text"] {        
        padding: 3% 4%;
        width:90%;
    }    
    .calc-main {
        display: grid;
        grid-template-columns: 30% 70%;
    }

    #result-dashboard {
        display: grid;
        grid-template-columns: 50% 50%;
              
    }
    .form-input {
        padding: 3% 5%;
        margin:0.3rem;
    }
    
    .form-body {
        margin:1rem;
        margin-left:0;
        border: 1px solid #004157;
        border-radius:5px;
        padding:8% 10%;        
    }
    
    .calculator_results{
        margin: 1rem;
        margin-right:0;
    }

}

`

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
