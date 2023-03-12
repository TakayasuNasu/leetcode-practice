<h1 align="center">
  Leetcode Practice by TypeScript
</h1>

## Word List

### queue

#### 集合(set)を扱う代表的なデータ型

スタックは末尾 から、キューは先頭から要素が取り出されます。

#### heap

ヒープ (heap) は優先度付きキュー (priority queue) の実装の 1 つ。集合に含まれる要素が何らかの優先度 (priority) 順に取り出されるという特徴を持っています。

### stack

#### 集合(set)を扱う代表的なデータ型

スタックは末尾 から、キューは先頭から要素が取り出されます。

### Graph: グラフ

- 頂点 (vertex) の有限集合 V=(v1,v2,...,vn)
- 辺 (edge) の有限集合 E=(e1,e2,...,em)

G=(V,E)
E=(v1,v2)

### DFS (深さ優先探索)

### BFS: (幅優先探索)

## Run Test

```bash
yarn test src/problem_901*
```

### `.toStrictEqual(value)

オブジェクトが同じ構造と型を持っていることをテストする

- `{a: undefined, b: 2}` は `{b: 2}` と等しくない
- 未定義の項目が考慮される

- keys with `undefined` properties are checked, e.g. `{a: undefined, b: 2}` will not equal `{b: 2}`;
  - undefined items are taken into account, e.g. `[2]` will not equal `[2, undefined]`;
- array sparseness is checked, e.g. `[, 1]` will not equal `[undefined, 1]`;

## Array.prototype.shift()

`shift()` メソッドは 0 番目の位置の要素を取り除き、続く位置の値を小さい方向にずらします。そして、削除された値を返します。`length` プロパティが 0 の場合、`undefined` を返します

```ts
const names = ['Andrew', 'Edward', 'Paul', 'Chris', 'John']

while (typeof (i = names.shift()) !== 'undefined') {
  console.log(i)
}
// Andrew, Edward, Paul, Chris, John
```
