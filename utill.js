module.exports = function bindFunc (func) {
  func.forEach(f => (this[f] = this[f].bind(this)))
}
