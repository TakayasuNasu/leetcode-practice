## Heap Sort

### 配列をヒープに

#### 最小ヒープ

各ノードがその子ノードより小さいか等しくなるよう並べ替える。
つまり、親ノードとその子ノードに着目したとき、親ノードは必ず最小になります。

> 定義が逆になったものは最大ヒープ

```ts
for (let i = length - 1; i >= 0; i--) {
  // ヒープソートの主要な部分で、最大要素（ルート）と未ソート部分の最後の要素を交換
  swap(array, 0, i)
  maxHeapify(array, 0, i)
}
```

現在のノードがその子ノードよりも小さい場合、最大の子ノードと交換し、その子ノード以下でヒープを再構築します。

```ts
function maxHeapify(array: Array<number>, index: number, length: number) {
  let left = 2 * index
  let right = 2 * index + 1
  let maximum: number

  if (right < length) {
    if (array[left] >= array[right]) {
      maximum = left
    } else {
      // 最大の値を持つノードのインデックスを保持
      maximum = right
    }
  } else if (left < length) {
    maximum = left
  } else {
    return
  }
}
```
