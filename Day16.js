function transformTree(tree) {
    function create(index) {
      if (tree[index] === null || index >= tree.length) {
        return null
      } else {
        return {
          value: tree[index],
          left: create(2 * index + 1),
          right: create(2 * index + 2),
        }
      }
  
    }
    const result = create(0)
    return result
  
  }

// Test: 
// transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])

// Expected:
// {
//   "value": 2,
//   "left": {
//     "value": 7,
//     "left": null,
//     "right": {
//       "value": 6,
//       "left": {
//         "value": 1,
//         "left": null,
//         "right": null
//       },
//       "right": {
//         "value": 11,
//         "left": null,
//         "right": null
//       }
//     }
//   },
//   "right": {
//     "value": 5,
//     "left": null,
//     "right": {
//       "value": 9,
//       "left": null,
//       "right": {
//         "value": 10,
//         "left": null,
//         "right": null
//       }
//     }
//   }
// }

// Actual:
// {
//   "value": 2,
//   "left": {
//     "value": 7,
//     "left": null,
//     "right": {
//       "value": 6,
//       "left": {
//         "value": 1,
//         "left": null,
//         "right": null
//       },
//       "right": {
//         "value": 11,
//         "left": null,
//         "right": null
//       }
//     }
//   },
//   "right": {
//     "value": 5,
//     "left": null,
//     "right": {
//       "value": 9,
//       "left": null,
//       "right": {
//         "value": 10,
//         "left": null,
//         "right": null
//       }
//     }
//   }
// }