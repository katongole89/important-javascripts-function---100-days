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
makeStringArrayFunc(testString)

// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

//convert string into an array