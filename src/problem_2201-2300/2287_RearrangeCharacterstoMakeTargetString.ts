/**
 * https://leetcode.com/problems/rearrange-characters-to-make-target-string/
 *
 * You are given two 0-indexed strings s and target.
 * You can take some letters from s and rearrange them to form new strings.
 * Return the maximum number of copies of target
 * that can be formed by taking letters from s and rearranging them.
 */

export function rearrangeCharacters(s: string, target: string): number {
  const mps: Record<string, number> = {}

  for (const c of s) {
    if (!(c in mps)) {
      mps[c] = 0
    }
    mps[c] += 1
  }

  const mpt: Record<string, number> = {}

  for (const c of target) {
    if (!(c in mpt)) {
      mpt[c] = 0
    }
    mpt[c] += 1
  }

  let num = 1e9

  for (const [key, value] of Object.entries(mpt)) {
    if (!(key in mps)) {
      return 0
    }
    num = Math.min(num, Math.floor(mps[key] / value))
  }

  return num
}
