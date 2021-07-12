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

export function isObjectEquivalent(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
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

export function kFormatter(num) {
  if (!num) return ''

  return Math.abs(num) > 999999
    ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + 'M'
    : Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'K'
    : Math.sign(num) * Math.abs(num).toFixed(1)
}

export function totalCompensation(data) {
  const { baseSalary, equity, targetBonus } = data

  if (!baseSalary) return ''
  let totalComp = baseSalary

  if (equity && equity.value && (equity.unit || '$') === '$')
    totalComp += parseFloat((equity.value / (equity.period || 1)).toFixed(2))

  if (targetBonus && targetBonus.value)
    if (targetBonus.unit === '%')
      totalComp += parseFloat(
        ((baseSalary / 100) * targetBonus.value).toFixed(2)
      )
    else totalComp += targetBonus.value

  return totalComp
}

export function compensationString(data) {
  let string = ''
  const { baseSalary, equity, targetBonus, signingBonus, relocationBonus } =
    data

  string += `$${baseSalary ? kFormatter(baseSalary) : '-K'} base | `

  if (targetBonus && targetBonus.value)
    if (targetBonus.unit === '%')
      string += `$${kFormatter(
        (baseSalary / 100) * targetBonus.value
      )} bonus | `
    else string += `$${kFormatter(targetBonus.value)} bonus | `
  else string += '$-K bonus | '

  if (equity && equity.value)
    if (equity.unit === 'shares')
      string += `$${kFormatter(
        equity.value / (equity.period || 1)
      )} shared equity | `
    else
      string += `$${kFormatter(equity.value / (equity.period || 1))} equity | `
  else string += '$-K equity | '

  string += `$${
    signingBonus ? kFormatter(signingBonus) : '-K'
  } signing bonus | `

  string += `$${
    relocationBonus ? kFormatter(relocationBonus) : '-K'
  } relocation bonus`

  return string
}
