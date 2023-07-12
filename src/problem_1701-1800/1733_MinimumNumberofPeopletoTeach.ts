/**
 * https://leetcode.com/problems/minimum-number-of-people-to-teach/
 *
 * Return the highest altitude of a point.
 * Return the minimum number of users you need to teach.
 */

export function minimumTeachings(
  n: number,
  languages: number[][],
  friendships: number[][],
): number {
  const lang = languages.map((l) => new Set(l))

  let dontspeak = new Set<number>()

  for (let [u, v] of friendships) {
    u = u - 1
    v = v - 1
    if (intersect(lang[u], lang[v]).size !== 0) continue
    dontspeak.add(u)
    dontspeak.add(v)
  }

  let langcount: Counter = {}

  for (let f of dontspeak) {
    for (let l of languages[f]) {
      if (langcount[l]) {
        langcount[l] += 1
      } else {
        langcount[l] = 1
      }
    }
  }

  const counts = Object.values(langcount)
  return dontspeak.size === 0 ? 0 : dontspeak.size - Math.max(...counts)
}

type Counter = {
  [index: number]: number
}

function intersect(set1: Set<number>, set2: Set<number>): Set<number> {
  return new Set([...set1].filter((x) => set2.has(x)))
}
