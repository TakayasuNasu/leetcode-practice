import { subdomainVisits } from './811_SubdomainVisitCount'

describe('subdomainVisits', () => {
  test('cpdomains = ["900 google.mail.com", "50 yahoo.com"]', () => {
    const cpdomains = ['900 google.mail.com', '50 yahoo.com']
    subdomainVisits(cpdomains)
  })
})
