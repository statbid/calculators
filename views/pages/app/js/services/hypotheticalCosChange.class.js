'use strict'

export class HypotheticalCosChange {

  static calculateGrowth() {
    const cos = HypotheticalCosChange.getFormValues()
    console.log(cos)
    cos.currentCos = cos.spend / cos.revenue
    cos.cosHns = Math.pow(cos.newCos / cos.currentCos, 2) * cos.spend
    cos.cosHnr = cos.cosHns / cos.newCos
    cos.cosIs = cos.cosHns - cos.spend
    cos.cosIr = cos.cosHnr - cos.revenue
    cos.cosIcos = (cos.cosIs / cos.cosIr) * 100

    return cos
  }

  static getFormValues() {
    const spendEl = document.getElementById("cos-spend-value")
    const revenueEl = document.getElementById("cos-revenue-value")
    const newCosEl = document.getElementById("cos-new-cos-value")

    let cos = {}

    if (spendEl && revenueEl && newCosEl) {
      cos = {
        spend: parseFloat(spendEl.value.replaceAll(/[$,]/g, "")),
        revenue: parseFloat(revenueEl.value.replaceAll(/[$,]/g, "")),
        newCos: parseFloat(newCosEl.value.replaceAll("%", "")) / 100
      }
    } else {
      throw new Error(`cosSpend, cosRevenue, cosNewCos cannot be undefined.`)
    }
    return cos
  }

  static setResult() {
    const cos = HypotheticalCosChange.calculateGrowth()
    const { cosHnr, currentCos, cosHns, cosIs, cosIr, cosIcos } = cos
    if (isFinite(cosHns)) {
      document.getElementById("cos-current-cos-value").value = (100 * currentCos).formatMoney(2, ".", ",") + " %"
      document.getElementById("cos-hns").innerHTML = "$" + cosHns.formatMoney(0, ".", ",")
      document.getElementById("cos-hnr").innerHTML = "$" + cosHnr.formatMoney(0, ".", ",")
      document.getElementById("cos-is").innerHTML = "$" + cosIs.formatMoney(0, ".", ",")
      document.getElementById("cos-ir").innerHTML = "$" + cosIr.formatMoney(0, ".", ",")
      document.getElementById("cos-icos").innerHTML = cosIcos.formatMoney(2, ".", ",") + " %"
    }
  }
}