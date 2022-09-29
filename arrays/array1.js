let nameArr = ['cat', 'dog', 'cow']
// function (element, index, array)
// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// FOREACH
// helps you loop through every thing without returning anything
const forEachFunc = (arr) =>{
	arr.forEach((name)=>{
		console.log(name)
	})
}
//call function to see result
// forEachFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//FILTER
//returns an array of elements that meet a certain 
const filterFunc = (arr) =>{
	const newArray = arr.filter((name)=>{
		return name != 'cow'
	})
	console.log(newArray)
}
//call function to see result
// filterFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//SOME
//It tests whether at least one element within the array tests positive for a specific condition
const someFunc = (arr) =>{
	const namedCow = arr.some((name)=> name === 'cow')
	console.log(namedCow)
}
//call function to see result
// someFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//EVERY
//It tests whether all elements satisfy a condition. Only then, the method returns true
const everyFunc = (arr) =>{
	const namedCow = arr.every((name)=> name === 'cow')
	console.log(namedCow)
}
//call function to see result
// everyFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//INCLUDES
//checks whether an array contains a specific element
// structure
// includes(function (searchElement, fromIndex) {
//   // searchElement is the element you look for
//   // fromIndex is the index the search should start at
// });
const includesFunc = (arr) =>{
	const namedCow = arr.includes('cow');
}
//call function to see result
includesFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//MAP
//Whenever you want to transform all values within an array, map is the way to go.
const mapFunc = (arr) =>{
	const newArray = arr.map((name)=> name+'2')
	console.log(newArray)
}
//call function to see result
// mapFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//REDUCE
//reduce is the most powerful array method existing. It can be used to reimplement all existing array methods, and it's the most flexible one.
// TEMPLATE
// reduce(function (accumulator, currentValue, currentIndex, array) {
//   // accumulator is the result of the last call, or the initialValue in the beginning
//   // currentValue is the value currently processed
//   // currentIndex is the index of the current value within the array
//   // array is a reference to the array reduce works on
// }, initialValue);
const numbers = [15.5, 2.3, 1.1, 4.7];
const reduceFunc = (arr) =>{
	
	// Round all the numbers and display the sum:
	const theTotal = numbers.reduce((total, number, currentIndex, arr)=>{
		return total + Math.round(number)
	})
	console.log(theTotal)
}
//call function to see result
// reduceFunc(numbers)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//SORT AND REVERSE
//returns an array of elements that meet a certain
// TEST SORT ON STRINGS
const sortStrings = (arr) =>{
	console.log(arr)
	const newArr = arr.sort()
	console.log(newArr)
}
//call function to see result
// sortStrings(nameArr)

// PASSING A COMPARE FUNCTION

// If compare(a,b) is less than zero, the sort() method sorts a to a lower index than b. In other words, a will come first.
// If compare(a,b) is greater than zero, the sort() method sort b to a lower index than a, i.e., b will come first.
// If compare(a,b) returns zero, the sort() method considers a equals b and leaves their positions unchanged.
let numbers22 = [0, 1 , 2, 3, 10, 20, 30 ];
const testCompareFunc = (arr) =>{
	const newArr = arr.sort((a,b)=> a-b)
	console.log(newArr)
}

const customReturnSort = () =>{
	let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
	numbers.sort( function( a , b){
		if(a > b) return 1;
		if(a < b) return -1;
		return 0;
	});

	console.log(numbers);
}



//call function to see result
// testCompareFunc(numbers22)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//FIND
//is your search function
// Whenever you look for something within an array, you can use find to retrieve the first element from the array that satisfies your conditions.
const findFunc = (arr) =>{
	const searchedElement = arr.find((name)=> name ==='cow')
	console.log('search', searchedElement)
}
//call function to see result
// findFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//PUSH
//adds a value at the end of the array
const pushFunc = (arr) =>{
	let pushValue = '4'
	arr.push(pushValue)
	console.log('new array', arr)
}
//call function to see result
// pushFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//POP
//removes a value at the end of the array
const popFunc = (arr) =>{
	arr.pop()
	console.log('new array', arr)
}
//call function to see result
// popFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//UNSHIFT
//Adds a value at the beginning of the array
const unshiftFunc = (arr) =>{
	let newValue = 'the new value'
	arr.unshift(newValue)
	console.log('new array', arr)
}
//call function to see result
// unshiftFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//SHIFT
//removes a value at the beginning of the array
const shiftFunc = (arr) =>{
	arr.shift()
	console.log('new array', arr)
}
//call function to see result
// shiftFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//JOIN
//creates a string from the elements of an array
const joinFunc = (arr) =>{
	let newArray = arr.join('')
	// =======
	// brings a string with commas
	// let newArray = arr.join()
	// ++++++++++++++
	console.log('new array', newArray)
}
//call function to see result
// joinFunc(nameArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//SLICE
//The slice() method returns selected elements in an array, as a new array. -- returns a portion of the array depending on wat u have passed
//brings back the elements that are inbtn elements of the given indices
//end not included
// positive means starting from the front and negative means starting from the back
let theTestArr = ['1', '2', '3', '4', '5', '6', '7']
const sliceFunc = (arr) => {
	// let newArray = arr.slice(1, 6)
	// console.log('new array', newArray)

	let newArrayNegative = arr.slice(-3,-1)
	console.log('new array', newArrayNegative)
}
//call function to see result
// sliceFunc(theTestArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//SPLICE
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
//structure
//###(index, deleteCount, wat-to-add)
const spliceFunc = (arr) => {
	arr.splice(1, 0, 'Feb');
	console.log('new array', arr)
}
//call function to see result
// spliceFunc(theTestArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//INDEXOF
//Find the first index of "Apple":
let checkIndexArr = ['1', '2', '3', '4', '5', '6', '7']
const indexOfFunc = (arr) => {
	let theIndex = arr.indexOf('2');
	console.log('index', theIndex)
}
//call function to see result
// indexOfFunc(checkIndexArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//LENGTH
//get length of the array
const lengthFunc = (arr) => {
	let theLength = arr.length;
	console.log('length', theLength)
}
//call function to see result
// lengthFunc(checkIndexArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
//Array.isArray
//checking if variable
const arrayIsArrayFunc = (arr) => {
	let isArray = Array.isArray(arr);
	console.log('is an array', isArray)
}
//call function to see result
// arrayIsArrayFunc(checkIndexArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++