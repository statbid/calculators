'use strict'

import { Component } from 'lib/component.class.js'
import hypCosTitleComponent from './hypCosTitle.component.js'
import hypCosFormBodyComponent from './hypCosFormBody.component.js'
import hypCosCalcresultComponent from './hypCosCalcResult.component.js'

import { HypotheticalCosChange } from '../../services/hypotheticalCosChange.class.js'

const template = `
    <div class="hypothetical-cos-calculator">
        ${hypCosTitleComponent.template}    
        <div class="calc-main">
            ${hypCosFormBodyComponent.template}
            ${hypCosCalcresultComponent.template}
        </div>
    </div>
`

const style = ``

const eventHandlers = {

    hypotheticalCosChangeComponentHandler: () => {
        const spendEl = document.getElementById("cos-spend-value")
        const revenueEl = document.getElementById("cos-revenue-value")
        const newCosEl = document.getElementById("cos-new-cos-value")

        if (spendEl && revenueEl && newCosEl) {
            spendEl.value = "$" + parseFloat(spendEl.value).formatMoney(0, ".", ",")
            revenueEl.value = "$" + parseFloat(revenueEl.value).formatMoney(0, ".", ",")
            newCosEl.value = parseFloat(newCosEl.value).formatMoney(2, ".", ",") + " %"

            HypotheticalCosChange.setResult()

            document.querySelectorAll("#hyp-cos-change input").forEach(el => {
                el.onchange = async (e) => HypotheticalCosChange.setResult()
            })

            spendEl.onchange = async (e) => {
                spendEl.value = "$" + parseFloat(spendEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                HypotheticalCosChange.setResult()
            }
            revenueEl.onchange = async (e) => {
                revenueEl.value = "$" + parseFloat(revenueEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                HypotheticalCosChange.setResult()
            }
            newCosEl.onchange = async (e) => {
                newCosEl.value = parseFloat(newCosEl.value.replaceAll(/[$,]/g, "")).formatMoney(2, ".", ",") + " %"
                HypotheticalCosChange.setResult()
            }
        }
    }
}

const hypotheticalCosChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalCosChangeComponent