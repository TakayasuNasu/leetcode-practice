export function subdomainVisits(cpdomains: string[]): string[] {
  const result: string[] = []
  const map = new Map<string, number>()

  for (const word of cpdomains) {
    const [i, j] = word.split(' ')
    const count = Number(i)
    const domains = j.split('.')

    let currentDomain = ''

    for (let i = domains.length - 1; i >= 0; i--) {
      currentDomain = !currentDomain
        ? domains[i]
        : `${domains[i]}.${currentDomain}`

      if (map.has(currentDomain)) {
        const currentCount = map.get(currentDomain)

        if (currentCount) {
          map.set(currentDomain, currentCount + count)
        }
      } else {
        map.set(currentDomain, count)
      }
    }
  }
  console.log(map)

  map.forEach((value, key) => {
    result.push(`${value} ${key}`)
  })
  return result
}
