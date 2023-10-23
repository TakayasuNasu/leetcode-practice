/**
 * https://leetcode.com/problems/unique-morse-code-words/
 *
 * International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes,
 * Return the number of different transformations among all words we have.
 */

const morse: { [key: string]: string } = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
}

export function uniqueMorseRepresentations(words: string[]): number {
  const transformations: Set<string> = new Set()

  for (let i = 0; i < words.length; i++) {
    let transformation = ''
    for (let j = 0; j < words[i].length; j++) {
      transformation += morse[words[i][j]]
    }
    transformations.add(transformation)
  }
  return transformations.size
}
