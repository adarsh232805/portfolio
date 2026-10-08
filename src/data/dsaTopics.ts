import { DsaTopic } from '../types';

export const dsaTopics: DsaTopic[] = [
  {
    id: 'arrays',
    name: 'Arrays',
    description: 'In-place modifications, two pointers, prefix sums, and kadane algorithm for optimal space-time trade-offs.',
    keyPatterns: ['Prefix Sums', 'Two Pointers', 'Dutch National Flag', 'Interval Merging']
  },
  {
    id: 'strings',
    name: 'Strings',
    description: 'Pattern matching, palindromic expansion, and character frequency state transitions.',
    keyPatterns: ['Anagram Analysis', 'Palindromic Substrings', 'Rabin-Karp / KMP Intuition', 'String Parsing']
  },
  {
    id: 'hashing',
    name: 'Hashing',
    description: 'O(1) lookups, hash map frequency counting, bucket sort logic, and collision-aware data access.',
    keyPatterns: ['Two Sum Pattern', 'Subarray Sum Equals K', 'Frequency Maps', 'Rolling Hash']
  },
  {
    id: 'stack',
    name: 'Stack',
    description: 'Monotonic stack logic, parenthesis validation, evaluating postfix expressions, and nearest greater/smaller element queries.',
    keyPatterns: ['Monotonic Stack', 'Valid Parentheses', 'Next Greater Element', 'Histogram Area']
  },
  {
    id: 'queue',
    name: 'Queue',
    description: 'FIFO buffers, monotonic deques, sliding window maximums, and breadth-first search scheduling.',
    keyPatterns: ['Sliding Window Maximum', 'Level Order BFS', 'Circular Queues', 'Priority Queues / Heaps']
  },
  {
    id: 'linked-list',
    name: 'Linked List',
    description: 'Pointer manipulation, Floyd fast/slow cycle detection, in-place reversals, and merge routines.',
    keyPatterns: ['Fast & Slow Pointers', 'In-place Reversal', 'Merge K Sorted Lists', 'LRU Cache Design']
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Logarithmic search spaces, search on answer paradigms, rotated sorted arrays, and bound constraints.',
    keyPatterns: ['Search on Answer Space', 'Rotated Array Pivot', 'Lower / Upper Bound', 'Capacity Allocation']
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Dynamic and fixed boundary contraction, maintaining running aggregates, and substring optimization.',
    keyPatterns: ['Dynamic Window Contraction', 'Fixed Size Window', 'Longest Substring Without Repeats', 'Minimum Window Substring']
  },
  {
    id: 'trees',
    name: 'Trees',
    description: 'Recursive traversals (pre/in/post), BST invariants, lowest common ancestors, and diameter/depth calculations.',
    keyPatterns: ['DFS Tree Recursion', 'BFS Level Order', 'BST Properties', 'Lowest Common Ancestor']
  },
  {
    id: 'graphs',
    name: 'Graphs',
    description: 'Adjacency representation, BFS shortest path, DFS connected components, topological sort (Kahn), and Dijkstra routing.',
    keyPatterns: ['BFS / DFS Traversal', 'Topological Sorting', 'Dijkstra Shortest Path', 'Disjoint Set Union (DSU)']
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    description: 'Optimal substructure and overlapping subproblems: memoization, 1D/2D tabulations, and space-optimized state transitions.',
    keyPatterns: ['1D / 2D Tabulation', '0/1 Knapsack Pattern', 'Longest Common Subsequence', 'State Machine DP']
  }
];
