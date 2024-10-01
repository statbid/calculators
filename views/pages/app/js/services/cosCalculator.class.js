'use strict'

export class Growth {

  constructor(growthObj) {
    try {
      this.validateGrowthObj(growthObj)
      this.order = growthObj.order
      this.revenue = growthObj.revenue
      this.goods = growthObj.goods
      this.ship = growthObj.ship
      this.fee = growthObj.fee
      this.expense = growthObj.expense
      this.optimize = growthObj.optimize
    } catch (e) {
      throw new Error(e)
    }
  }

  validateGrowthObj(growthObj) {
    const {
      order,
      revenue,
      goods,
      ship,
      fee,
      expense,
      optimize } = growthObj
    if (!order) {
      throw new Error('order cannot be undefined.')
    }
    if (!revenue) {
      throw new Error('revenue cannot be undefined.')
    }
    if (!goods) {
      throw new Error('goods cannot be undefined.')
    }
    if (!ship) {
      throw new Error('ship cannot be undefined.')
    }
    if (!fee) {
      throw new Error('fee cannot be undefined.')
    }
    if (expense == undefined || expense.length == 0) {
      throw new Error('expense cannot be undefined.')
    }
    if (optimize == undefined || optimize.length == 0) {
      throw new Error('optimize cannot be undefined.')
    }
  }
}

export class CosCalculator {

  static calculateGrowth(growthObj) {
    const growth = new Growth(growthObj)
    if (growth) {
      const { goods, ship, expense, optimize, revenue, order, fee } = growth
      const r = goods + ship + fee + expense
      const marginal = (1 == optimize) ? (revenue / order * (1 - r)) : (1 - r)
      const paid = marginal / 2
      const formattedMarginal = (100 * marginal)
      const formattedPaid = (100 * paid)
      return { marginal: formattedMarginal, paid: formattedPaid }
    }
  }

  static getFormValues() {
    const orderEl = document.getElementById("metric-order")
    const revenueEl = document.getElementById("metric-revenue")
    const goodsEl = document.getElementById("metric-goods")
    const shipEl = document.getElementById("metric-ship")
    const feeEl = document.getElementById("metric-fee")
    const expenseEl = document.getElementById("metric-expense")
    const optmizeEls = document.getElementsByName("metric-optimize")

    let growth = {}

    const allElementsExist = orderEl && revenueEl && goodsEl &&
      shipEl && feeEl && expenseEl && optmizeEls

    if (allElementsExist) {
      let optmizeElValue
      optmizeEls.forEach(el => {
        if (el.checked == true) {
          optmizeElValue = el.value
        }
      })

      growth = {
        order: parseFloat(orderEl.value.replaceAll(/[$,]/g, "")),
        revenue: parseFloat(revenueEl.value.replaceAll(/[$,]/g, "")),
        goods: parseFloat(goodsEl.value.replace("%", "")) / 100,
        ship: parseFloat(shipEl.value.replace("%", "")) / 100,
        fee: parseFloat(feeEl.value.replace("%", "")) / 100,
        expense: parseFloat(expenseEl.value.replace("%", "")) / 100,
        optimize: parseFloat(optmizeElValue)
      }
    }
    return growth
  }

  static setResult() {
    const growth = CosCalculator.getFormValues()
    const { marginal, paid } = CosCalculator.calculateGrowth(growth)
    if (marginal && paid) {
      document.getElementById("metric_marginal").innerHTML = `${marginal.formatMoney(2, ".", ",")} %`
      document.getElementById("metric_paid").innerHTML = `${paid.formatMoney(2, ".", ",")} %`
    }
  }
}