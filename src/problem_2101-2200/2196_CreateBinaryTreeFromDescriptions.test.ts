import { fromArrayToTree } from '@/TreeNode'
import { createBinaryTree } from './2196_CreateBinaryTreeFromDescriptions'

describe('createBinaryTree', () => {
  test('descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]', () => {
    const descriptions = [
      [20, 15, 1],
      [20, 17, 0],
      [50, 20, 1],
      [50, 80, 0],
      [80, 19, 1],
    ]
    const expected = fromArrayToTree([50, 20, 80, 15, 17, 19])
    createBinaryTree(descriptions)
  })
})
