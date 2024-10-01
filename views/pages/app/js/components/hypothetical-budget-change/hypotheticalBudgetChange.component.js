'use strict'

import { Component } from 'lib/component.class.js'
import hypBudgetTitleComponent from './hypBudgetTitle.component.js'
import hypBudgetFormBodyComponent from './hypBudgetFormBody.component.js'
import hypBudgetCalcResultComponent from './hypBudgetCalcResult.component.js'
import { HypotheticalBudgetChange } from '../../services/hypotheticalBudgetChange.class.js'

const template = `
    <div class="hypothetical_cos_calculator">
        ${hypBudgetTitleComponent.template}
        <div class="calc-main">
            ${hypBudgetFormBodyComponent.template}
            ${hypBudgetCalcResultComponent.template}       
        </div>
    </div>
`

const style = ``

const eventHandlers = {

    hypotheticalBudgetChangeComponentHandler: () => {
        const spendEl = document.getElementById("budget-spend-value")
        const revenueEl = document.getElementById("budget-revenue-value")
        const newCosEl = document.getElementById("budget-new-cos-value")

        if (spendEl && revenueEl && newCosEl) {
            spendEl.value = "$" + parseFloat(spendEl.value).formatMoney(0, ".", ",")
            revenueEl.value = "$" + parseFloat(revenueEl.value).formatMoney(0, ".", ",")
            newCosEl.value = "$" + parseFloat(newCosEl.value).formatMoney(0, ".", ",")

            HypotheticalBudgetChange.setResult()

            document.querySelectorAll("#hyp-budget-change input").forEach(el => {
                el.onchange = async (e) => HypotheticalBudgetChange.setResult()
            })

            spendEl.onchange = async (e) => {
                spendEl.value = "$" + parseFloat(spendEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                HypotheticalBudgetChange.setResult()
            }
            revenueEl.onchange = async (e) => {
                revenueEl.value = "$" + parseFloat(revenueEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                HypotheticalBudgetChange.setResult()
            }
            newCosEl.onchange = async (e) => {
                newCosEl.value = "$" + parseFloat(newCosEl.value.replaceAll(/[$,]/g, "")).formatMoney(0, ".", ",")
                HypotheticalBudgetChange.setResult()
            }
        }
    }
}

const hypotheticalBudgetChangeComponent = new Component({ template, style, eventHandlers })

export default hypotheticalBudgetChangeComponent