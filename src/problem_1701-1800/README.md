## 1733

> You can choose one language and teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need to teach.

If we teach all language to all users, everyone can make friendship. This problem need minimum number of users we need to teach though.

### 1. 言語が通じない`friendships`の組み合わせを作る

```ts
let dontspeak = new Set<number>()
```

この時の条件を求める時に`Set`を使う(`helper`を使って実現)

```ts
for (let [u, v] of friendships) {
  u = u - 1
  v = v - 1
  // friendshipsは必ず一対一なので両者を比較してコミュニケーションが取れるか検証する
  if (intersect(lang[u], lang[v]).size !== 0) continue
  // コミュニケーションが取れる場合はdontspeakに追加する
  dontspeak.add(u)
  dontspeak.add(v)
}

// Helper function to find intersection of two sets
function intersect(set1: Set<number>, set2: Set<number>): Set<number> {
  return new Set([...set1].filter((x) => set2.has(x)))
}
```

### 2. 何種類の言語が必要かカウンターを使って計算する

```ts
type Counter = {
  [index: number]: number
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
```
