/**
 * @description 工具函数
 */

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
