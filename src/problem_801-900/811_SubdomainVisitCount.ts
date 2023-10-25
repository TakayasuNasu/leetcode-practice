export function subdomainVisits(cpdomains: string[]): string[] {
  const map = new Map<string, number>()

  for (const word of cpdomains) {
    const [stringNumber, domain] = word.split(' ')
    const count = Number(stringNumber)
    const search = '.'
  }

  return []
}
