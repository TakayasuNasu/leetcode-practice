## 811_SubdomainVisitCount.ts

### Point

The way in which the domain can be removed is uncertain.

1. It would be a split of the cpdomains 2 times.

```ts
// first time. split number and domain.
const [i, j] = word.split(' ')

// second time, split domains that separator as '.' to single word.
const domains = j.split('.')
```

- loop from last index and keep last domain

```ts
let currentDomain = ''
for (let i = domains.length - 1; i >= 0; i--) {
  currentDomain = !currentDomain
    ? domains[i]
    : : `${domains[i]}.${currentDomain}`
}
```
