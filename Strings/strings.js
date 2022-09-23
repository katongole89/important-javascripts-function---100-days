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




