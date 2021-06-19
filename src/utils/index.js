export const getRandomId = () => Math.random().toString(36).substr(2)

export function isEmpty(object) {
  const type = getType(object)
  if (type === 'number') return false
  if (type === 'null' || type === 'undefined') return true
  return Object.keys(object).length === 0
}

export function getType(variable) {
  return Object.prototype.toString
    .call(variable)
    .replace(/\[object ([a-zA-Z]+)]/g, '$1')
    .toLowerCase()
}

export function formatNumber(value) {
  value += ''
  const list = value.split('.')
  const prefix = list[0].charAt(0) === '-' ? '-' : ''
  let num = prefix ? list[0].slice(1) : list[0]
  let result = ''

  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }

  if (num) {
    result = num + result
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`
}
