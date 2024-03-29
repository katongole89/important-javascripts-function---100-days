// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// charAt(x)
// This function will return the character at the x position within the string.
let testString = 'forever young'
const charAtFunc = (str) =>{
	let theCharacter = str.charAt(6)
    console.log(theCharacter)
}
//call function to see result
// charAtFunc(testString)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//CONVERT STRING TO AN ARRAY
// Make a string an array
const makeStringArrayFunc = (str) =>{
	let newArray = [...str]
    console.log(newArray)
    // join it back to a string
    // console.log(newArray.join(''))
}
//call function to see result
// makeStringArrayFunc(testString)

// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// indexOf(substr, [start])
//Searches and (if found) returns the index number of the searched character or substring within the string. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is 0.
const indexOfFunc = (str) =>{
	let theIndex = str.indexOf('koung')
    console.log(str.charAt(8))
    console.log('the index', theIndex)
}
//call function to see result
// indexOfFunc(testString)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// lastIndexOf(substr, [start])
// Searches and (if found) returns the index number of the searched character or substring within the string. Searches the string from end to the beginning. If not found, -1 is returned. “Start” is an optional argument specifying the position within string to begin the search. Default is string.length-1.
let lastIndexTestStr = 'gigi hadid'
const lastIndexOfFunc = (str) => {
	let theIndex = str.lastIndexOf('g')
    console.log('the last index', theIndex)
}
//call function to see result
// lastIndexOfFunc(lastIndexTestStr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//replace(regexp/substr, replacetext)
// Searches and replaces the regular expression (or sub string) portion (match) with the replaced text instead.
let replaceStr = 'gigi hadid gigi katongole gigi'
const replaceFunc = (str) => {
    //removes the first one
	let newStr = str.replace('gigi', 'sheila')
    console.log('the new replace sentence', newStr)
    //global replace
    let globalReplaceStr = str.replace(/gigi/g, 'sheila')
    console.log('the global replace', globalReplaceStr)

    // A global, case-insensitive replacement:
    let globalReplaceCaseInsensitiveStr = str.replace(/gigi/g, 'sheila')
    console.log('the global replace case insenstive', globalReplaceCaseInsensitiveStr)
}
//call function to see result
// replaceFunc(replaceStr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// slice(start, [end])
// This function returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself. “End” is optional, and if none is specified, the slice includes all characters from “start” to end of the string.
const sliceFunc = (str) => {
	let slicedStr = str.slice(0, 7)
    console.log('sliced str', slicedStr)
}
//call function to see result
// sliceFunc(lastIndexTestStr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// split(delimiter, [limit])
// This function returns a substring of the string based on the “start” and “end” index arguments, NOT including the “end” index itself. “End” is optional, and if none is specified, the slice includes all characters from “start” to end of the string.
const splitFunc = (str) => {
	let splitStr = str.split(' ')
    console.log('split str', splitStr)
}
//call function to see result
// splitFunc(lastIndexTestStr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// toLowerCase()
// This will return the string with all of its characters converted to lowercase.
let capitalLetteredWord = 'KATONGOLE RICHARD'
const toLowerCaseFunc = (str) => {
	let newWordLowerCase = str.toLowerCase()
    console.log('the lower cased word', newWordLowerCase)
}
//call function to see result
// toLowerCaseFunc(capitalLetteredWord)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// toUpperCase()
// This will return the string with all of its characters converted to uppercase.
let lowerLetteredWord = 'katongole richard'
const toUpperCaseFunc = (str) => {
	let newWordUpperCase = str.toLowerCase()
    console.log('the upper cased word', newWordUpperCase)
}
//call function to see result
// toLowerCaseFunc(lowerLetteredWord)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// includes()
// It is used to check whether a string contains the specified string or characters.
const includesFunc = (str) => {
	let isStrThea = str.includes('gigi')
    console.log('The str is there --', isStrThea)
}
//call function to see result
// includesFunc(lowerLetteredWord)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// endsWith()
// This function checks whether a string ends with specified string or characters.
const endsWithFunc = (str) => {
	let isStrEndsWth = str.endsWith('gigi')
    console.log('The str is there --', isStrEndsWth)
}
//call function to see result
// endsWithFunc(lowerLetteredWord)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// trim()
// This function removes whitespace from both ends of a string.
let strWithSpace = '  testRemove space  '
const trimFunc = (str) => {
	let strRemovedSpace = str.trim()
    console.log('new str --', strRemovedSpace)
}
//call function to see result
// trimFunc(strWithSpace)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++