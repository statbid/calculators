'use strict'

import { Component } from 'lib/component.class.js'
import { CosCalculator } from '../../services/cosCalculator.class.js'
import cosCalcTitleComponent from './cosCalcTitle.component.js'
import cosCalcResultComponent from './cosCalcResult.component.js'
import cosCalcFormBodyComponent from './cosCalcFormBody.component.js'

const template = `
    <div id="cos-calc-component">
        ${cosCalcTitleComponent.template}
        <div class="calc-main">
            ${cosCalcFormBodyComponent.template}
            ${cosCalcResultComponent.template}
        </div>
    </div>
`

const style = ``

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
            orderEl.value = "$" + parseFloat(orderEl.value).formatMoney()
            revenueEl.value = "$" + parseFloat(revenueEl.value).formatMoney()
            goodsEl.value = parseFloat(goodsEl.value) + " %"
            shipEl.value = parseFloat(shipEl.value) + " %"
            feeEl.value = parseFloat(feeEl.value) + " %"
            expenseEl.value = parseFloat(expenseEl.value) + " %"

            CosCalculator.setResult()

            document.querySelectorAll("#cos-calculator input").forEach(el => {
                el.onchange = async (e) => CosCalculator.setResult()
            })

            orderEl.onchange = async (e) => {
                orderEl.value = "$" + parseFloat(orderEl.value.replace("$", "")).formatMoney()
                CosCalculator.setResult()
            }
            revenueEl.onchange = async (e) => {
                revenueEl.value = "$" + parseFloat(revenueEl.value.replace("$", "")).formatMoney()
                CosCalculator.setResult()
            }
            goodsEl.onchange = async (e) => {
                goodsEl.value = parseFloat(goodsEl.value.replace("%", "")) + " %"
                CosCalculator.setResult()
            }
            shipEl.onchange = async (e) => {
                shipEl.value = parseFloat(shipEl.value.replace("%", "")) + " %"
                CosCalculator.setResult()
            }
            feeEl.onchange = async (e) => {
                feeEl.value = parseFloat(feeEl.value.replace("%", "")) + " %"
                CosCalculator.setResult()
            }
            expenseEl.onchange = async (e) => {
                expenseEl.value = parseFloat(expenseEl.value.replace("%", "")) + " %"
                CosCalculator.setResult()
            }
        }


    }
}

const cosCalculatorComponent = new Component({ template, style, eventHandlers })

export default cosCalculatorComponent
