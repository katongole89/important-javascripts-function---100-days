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