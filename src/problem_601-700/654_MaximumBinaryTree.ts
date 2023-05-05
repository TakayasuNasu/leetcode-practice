/**
 *
 * https://leetcode.com/problems/maximum-binary-tree/
 *
 * You are given an integer array nums with no duplicates.
 * A maximum binary tree can be built recursively from nums using the following algorithm:
 *
 * Create a root node whose value is the maximum value in nums.
 * Recursively build the left subtree on the subarray prefix to the left of the maximum value.
 * Recursively build the right subtree on the subarray suffix to the right of the maximum value.
 * Return the maximum binary tree built from nums.
 */

import { TreeNode } from '@/TreeNode'

export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length)
}

function helper(nums: number[], start: number, end: number): TreeNode | null {
  if (start >= end) {
    return null
  }

  let max = -1
  let index = -1

  for (let i = start; i < end; i++) {
    if (nums[i] > max) {
      max = nums[i]
      index = i
    }
  }

  return new TreeNode(
    max,
    helper(nums, start, index),
    helper(nums, index + 1, end)
  )
}
