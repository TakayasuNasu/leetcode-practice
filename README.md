<h1 align="center">
  Leetcode Practice by TypeScript
</h1>

## Word List

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
