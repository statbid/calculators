'use strict'

export class IncrementalityTestLength {

  static calculateGrowth() {
    const inc = IncrementalityTestLength.getFormValues()
    const t = (x) => 1.96 * x * Math.sqrt(inc.amo / 60) * (inc.amr / inc.amo) / (inc.roas * inc.mtb / 30)
    inc.tblYnMin = Math.pow(t(1), 2)
    inc.tblYnMax = Math.pow(t(2), 2)
    inc.tblLe = Math.pow(t(4), 2)
    return inc
  }

  static getFormValues() {
    const amrEl = document.getElementById("tbl-amr-value")
    const amoEl = document.getElementById("tbl-amo-value")
    const roasEl = document.getElementById("tbl-roas-value")
    const mtbEl = document.getElementById("tbl-mtb-value")

    let incrementality = {}

    if (amrEl && amoEl && roasEl && mtbEl) {
      incrementality = {
        amr: parseFloat(amrEl.value.replaceAll(/[$,]/g, "")),
        amo: parseFloat(amoEl.value),
        roas: parseFloat(roasEl.value),
        mtb: parseFloat(mtbEl.value.replaceAll(/[$,]/g, ""))
      }
    } else {
      throw new Error(`amr, amo, roas and mtb cannot be undefined.`)
    }
    return incrementality
  }

  static setResult() {
    const incrementality = IncrementalityTestLength.calculateGrowth()
    const { tblLe, tblYnMin, tblYnMax } = incrementality

    if (isFinite(tblLe)) {
      document.getElementById("tbl-yn-min").innerHTML = tblYnMin.formatMoney(0, ".", ",") + " Days"
      document.getElementById("tbl-yn-max").innerHTML = tblYnMax.formatMoney(0, ".", ",") + " Days"
      document.getElementById("tbl-le").innerHTML = tblLe.formatMoney(0, ".", ",") + " Days"
    } else {
      document.getElementById("tbl-yn-min").innerHTML = "0 Days"
      document.getElementById("tbl-yn-max").innerHTML = "0 Days"
      document.getElementById("tbl-le").innerHTML = "0 Days"
    }
  }
}