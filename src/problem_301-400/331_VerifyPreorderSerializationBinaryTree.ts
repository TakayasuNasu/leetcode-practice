/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/
 *
 * One way to serialize a binary tree is to use preorder traversal.
 * When we encounter a non-null node, we record the node's value.
 * If it is a null node, we record using a sentinel value such as '#'.
 *
 * For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.
 *
 * Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.
 *
 * It is guaranteed that each comma-separated value in the string must be either an integer or a character '#' representing null pointer.
 *
 * You may assume that the input format is always valid.
 *
 * - For example, it could never contain two consecutive commas, such as "1,,3".
 *
 * Note: You are not allowed to reconstruct the tree.
 */

export function isValidSerialization(preorder: string): boolean {
  const nodes = preorder.split(',')
  let diff = 1
  console.log(nodes)
  for (const node of nodes) {
    diff -= diff
    if (diff < 0) return false
    if (node !== '#') diff += 2
  }
  return diff == 0
}
