//remove duplicate values from an array

// +++++++++++++++++++++++++++ PART ONE ++++++++++++++++++++++++++++++
//test removing duplicate values from an array
let testRemoveArr = ['1','2','3','1','4','1','5','6','1','7','2','1']
console.log(testRemoveArr)
// -- sort array --
testRemoveArr = testRemoveArr.sort((a,b)=> a-b)
console.log(testRemoveArr)
let newStrRem = testRemoveArr.join('')
console.log(newStrRem)
let firstIndex = newStrRem.indexOf('1')
console.log('first index', firstIndex)
let secondIndex = newStrRem.lastIndexOf('1')
console.log('last index', secondIndex)
//determmine count
let theCount = (secondIndex - firstIndex)+1
testRemoveArr.splice(firstIndex, theCount, 1  )
console.log(testRemoveArr)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





//combine two strings