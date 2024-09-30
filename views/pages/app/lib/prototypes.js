'use strict'

Number.prototype.formatMoney = function (e, t, u) {
  var n = this,
    r = (e = isNaN(e = Math.abs(e)) ? 2 : e, t = null == t ? "." : t, u = null == u ? "," : u, n < 0 ? "-" : ""),
    a = parseInt(n = Math.abs(+n || 0).toFixed(e)) + "",
    d = (d = a.length) > 3 ? d % 3 : 0;
  return r + (d ? a.substr(0, d) + u : "") + a.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + u) + (e ? t + Math.abs(n - a).toFixed(e).slice(2) : "");
}