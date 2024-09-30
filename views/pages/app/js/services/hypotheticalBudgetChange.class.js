'use strict'

export class HypotheticalBudgetChange {

  static calculateBudgetCOS() {

    const budget = HypotheticalBudgetChange.getFormValues()
    budget.currentCos = budget.spend / budget.revenue
    budget.budgetHns = Math.sqrt(budget.newCos / budget.spend) * budget.currentCos
    budget.budgetHnr = budget.newCos / budget.budgetHns
    budget.budgetIs = budget.newCos - budget.spend
    budget.budgetIr = budget.budgetHnr - budget.revenue
    budget.budgetIcos = (budget.budgetIs / budget.budgetIr) * 100

    return budget
  }

  static getFormValues() {
    const spendEl = document.getElementById("budget-spend-value")
    const revenueEl = document.getElementById("budget-revenue-value")
    const newCosEl = document.getElementById("budget-new-cos-value")

    let budget = {}

    if (spendEl && revenueEl && newCosEl) {
      budget = {
        spend: parseFloat(spendEl.value.replaceAll(/[$,]/g, "")),
        revenue: parseFloat(revenueEl.value.replaceAll(/[$,]/g, "")),
        newCos: parseFloat(newCosEl.value.replaceAll(/[$,]/g, ""))
      }
    } else {
      throw new Error(`budgetSpend, budgetRevenue, budgetNewCos cannot be undefined.`)
    }
    return budget
  }

  static setResult() {
    const budget = HypotheticalBudgetChange.calculateBudgetCOS()
    const { budgetHnr, currentCos, budgetHns, budgetIs, budgetIr, budgetIcos } = budget

    if (isFinite(budgetHns)) {
      document.getElementById("budget-current-cos-value").value = (100 * currentCos).formatMoney(2, ".", ",") + "%"
      document.getElementById("budget-hns").innerHTML = (100 * budgetHns).formatMoney(2, ".", ",") + "%"
      document.getElementById("budget-hnr").innerHTML = "$" + budgetHnr.formatMoney(0, ".", ",")
      document.getElementById("budget-is").innerHTML = "$" + budgetIs.formatMoney(0, ".", ",")
      document.getElementById("budget-ir").innerHTML = "$" + budgetIr.formatMoney(0, ".", ",")
      document.getElementById("budget-icos").innerHTML = budgetIcos.formatMoney(2, ".", ",") + "%"
    }
  }
}