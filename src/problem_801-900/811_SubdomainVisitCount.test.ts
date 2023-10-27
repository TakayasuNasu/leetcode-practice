import { subdomainVisits } from './811_SubdomainVisitCount'

describe('subdomainVisits', () => {
  test('cpdomains = ["900 google.mail.com", "50 yahoo.com"]', () => {
    const cpdomains = ['900 google.mail.com', '50 yahoo.com']
    const expectedOutput = [
      '900 google.mail.com',
      '50 yahoo.com',
      '900 mail.com',
      '950 com',
    ]
    const result = subdomainVisits(cpdomains)
    expect(new Set(result)).toEqual(new Set(expectedOutput))
  })

  test('cpdomains = ["9001 discuss.leetcode.com"', () => {
    const cpdomains = ['9001 discuss.leetcode.com']
    const expectedOutput = [
      '9001 discuss.leetcode.com',
      '9001 leetcode.com',
      '9001 com',
    ]
    const result = subdomainVisits(cpdomains)
    expect(new Set(result)).toEqual(new Set(expectedOutput))
  })

  test('should aggregate counts for similar subdomains', () => {
    const input = [
      '900 google.mail.com',
      '50 yahoo.com',
      '1 intel.mail.com',
      '5 wiki.org',
    ]
    const expectedOutput = [
      '901 mail.com',
      '900 google.mail.com',
      '951 com',
      '50 yahoo.com',
      '5 wiki.org',
      '5 org',
      '1 intel.mail.com',
    ]
    const result = subdomainVisits(input)
    expect(new Set(result)).toEqual(new Set(expectedOutput))
  })

  test('should handle empty input', () => {
    const input: string[] = []
    const expectedOutput: string[] = []
    const result = subdomainVisits(input)
    expect(result).toEqual(expectedOutput)
  })

  test('should handle complex domain names', () => {
    const input = ['100 a.b.c.d.e.f.g.h']
    const expectedOutput = [
      '100 a.b.c.d.e.f.g.h',
      '100 b.c.d.e.f.g.h',
      '100 c.d.e.f.g.h',
      '100 d.e.f.g.h',
      '100 e.f.g.h',
      '100 f.g.h',
      '100 g.h',
      '100 h',
    ]
    const result = subdomainVisits(input)
    expect(new Set(result)).toEqual(new Set(expectedOutput))
  })
})
