<h1 align="center">
  Leetcode Practice by TypeScript
</h1>

## Run Test

```bash
yarn test src/problem_901*
```

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

### `.toStrictEqual(value)`

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

Point

- `shift()`は破壊的メソッド。元の配列の中身を更新する
  - `const array1 = [1, 2, 3]; array1.shift()` => `array1`は`[2, 3]`
- **先頭**の要素を取り除く - 最後の要素を取得するのは`pop()`

---

## Array.prototype.pop()

配列から**最後**の要素を取り除く

```ts
console.log(plants.pop())
// Expected output: "tomato"

console.log(plants)
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

Point

- `pop()`は破壊的メソッド。元の配列の中身を更新する
- **最後**の要素 - 先頭の要素を取得するのは`shift()`

---

## Array.prototype.indexOf()

`indexOf()`メソッドは引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。

```ts
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('bison'))
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2))
// Expected output: 4

console.log(beasts.indexOf('giraffe'))
// Expected output: -1
```

Point

- 配列要素の**インデックス**を返す
- 見つからなかった場合は -1

---

## Array.prototype.slice()

配列から任意の範囲内の要素を取得する。

```ts
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2, 4))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(2, -1))
// Expected output: Array ["camel", "duck"]
```

Point

- `start`が指定されなかった場合、`slice`は位置`0`から開始する
- `end`が省略された場合、`slice`は列の最後`(arr.length)`までを取り出す

## Inorder Traversal

この探索では、まず左サブツリー、次にルート、そして最後に右サブツリーを訪れます

## Preorder Traversal

この探索では、まずルート、左サブツリー、そして最後に右サブツリーを訪れます

## Postorder Traversal

この探索では、まず左のサブツリー、次に右のサブツリー、そして最後にルートを訪れます

```python
#指定されたバイナリツリーで順序どおりのトラバーサルを実行する再帰的関数
def inorderTraversal(root):
    if root is None:
        return

    inorderTraversal(root.left)
    print(root.data, end=' ')
    inorderTraversal(root.right)

#指定されたバイナリツリーでプレオーダートラバーサルを実行する再帰的関数
def preorderTraversal(root):
    if root is None:
        return

    print(root.data, end=' ')
    preorderTraversal(root.left)
    preorderTraversal(root.right)

#指定されたバイナリツリーでポストオーダートラバーサルを実行する再帰的関数
def postrderTraversal(root):
    if root is None:
        return

    postrderTraversal(root.left)
    postrderTraversal(root.right)
    print(root.data, end=' ')
```

## Tree shaking - ツリーシェイキング

- コードを最適化するための方法
- webpack などでファイルをバンドルする際に、利用されていない不要なコードを除去してファイルを出力すること
