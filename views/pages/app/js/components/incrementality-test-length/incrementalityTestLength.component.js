'use strict'

import { Component } from 'lib/component.class.js'
import incTestTitleComponent from './incTestTitle.component.js'
import incTestFormBodyComponent from './incTestFormBody.component.js'
import incTestCalcResultComponent from './incTestCalcResult.component.js'

import { IncrementalityTestLength } from '../../services/incrementalityTest.class.js'

const template = `
    <div id="incrementality-test-component">
        ${incTestTitleComponent.template}
        <div class="calc-main">    
            ${incTestFormBodyComponent.template}
            ${incTestCalcResultComponent.template}        
        </div>
    </div>
`
const style = ``

const eventHandlers = {
    incrementalityTestComponentHandler: () => {
        const amrEl = document.getElementById("tbl-amr-value")
        const amoEl = document.getElementById("tbl-amo-value")
        const roasEl = document.getElementById("tbl-roas-value")
        const mtbEl = document.getElementById("tbl-mtb-value")

        if (amrEl && amoEl && roasEl && mtbEl) {
            amrEl.value = "$" + parseFloat(amrEl.value).formatMoney(0, ".", ",")
            mtbEl.value = "$" + parseFloat(mtbEl.value).formatMoney(0, ".", ",")

            IncrementalityTestLength.setResult()

            document.querySelectorAll("#inc-test-length input").forEach(el => {
                el.onchange = async (e) => IncrementalityTestLength.setResult()
            })

            amrEl.onchange = async (e) => {
                amrEl.value = "$" + parseFloat(amrEl.value.replace(/[$,]/g, "")).formatMoney(0, ".", ",")
                IncrementalityTestLength.setResult()
            }
            mtbEl.onchange = async (e) => {
                mtbEl.value = "$" + parseFloat(mtbEl.value.replace(/[$,]/g, "")).formatMoney(0, ".", ",")
                IncrementalityTestLength.setResult()
            }
        }

    }
}

const incrementalityTestComponent = new Component({ template, style, eventHandlers })

export default incrementalityTestComponent