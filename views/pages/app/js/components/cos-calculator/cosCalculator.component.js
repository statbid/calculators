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
            orderEl.value = "$" + parseFloat(orderEl.value).formatMoney(0, ".", ",")
            revenueEl.value = "$" + parseFloat(revenueEl.value).formatMoney(0, ".", ",")
            goodsEl.value = parseFloat(goodsEl.value).formatMoney(2, ".", ",") + " %"
            shipEl.value = parseFloat(shipEl.value).formatMoney(2, ".", ",") + " %"
            feeEl.value = parseFloat(feeEl.value).formatMoney(2, ".", ",") + " %"
            expenseEl.value = parseFloat(expenseEl.value).formatMoney(2, ".", ",") + " %"

            CosCalculator.setResult()

            document.querySelectorAll("#cos-calculator input").forEach(el => {
                el.onchange = async (e) => CosCalculator.setResult()
            })

            orderEl.onchange = async (e) => {
                orderEl.value = "$" + parseFloat(orderEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                CosCalculator.setResult()
            }
            revenueEl.onchange = async (e) => {
                revenueEl.value = "$" + parseFloat(revenueEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                CosCalculator.setResult()
            }
            goodsEl.onchange = async (e) => {
                goodsEl.value = parseFloat(goodsEl.value.replace("%", "")).formatMoney(2, ".", ",") + " %"
                CosCalculator.setResult()
            }
            shipEl.onchange = async (e) => {
                shipEl.value = parseFloat(shipEl.value.replace("%", "")).formatMoney(2, ".", ",") + " %"
                CosCalculator.setResult()
            }
            feeEl.onchange = async (e) => {
                feeEl.value = parseFloat(feeEl.value.replace("%", "")).formatMoney(2, ".", ",") + " %"
                CosCalculator.setResult()
            }
            expenseEl.onchange = async (e) => {
                expenseEl.value = parseFloat(expenseEl.value.replace("%", "")).formatMoney(2, ".", ",") + " %"
                CosCalculator.setResult()
            }
        }


    }
}

const cosCalculatorComponent = new Component({ template, style, eventHandlers })

export default cosCalculatorComponent
