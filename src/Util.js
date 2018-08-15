import _ from 'lodash'

export function countWords(count, str) {
  for (let i = 0; i < str.length; i++) {
    let words = str[i].split(' ')
    for (let j = 0; j < words.length; j++) {
      let lc = words[j].toLowerCase()

      lc = lc.replace(/[^\w\s]/gi, '')

      if (count[lc] == null) count[lc] = 1
      else count[lc] += 1
    }
  }
}

export function countDomains(domains) {
  let count = {}

  for (let i = 0; i < domains.length; i++) {
    if (count[domains[i]] == null) count[domains[i]] = 1
    else {
      count[domains[i]] += 1
    }
  }

  return count

}

export function convertToRechartArray(countDomains) {
  let temp = []
  for (const key of Object.keys(countDomains)) {
    let obj = { domain: key, value: countDomains[key] }
    temp.push(obj)
  }
  console.log(temp)

  return _.sortBy(temp, 'value').reverse()
}
