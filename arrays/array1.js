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
	const namedCow = numbers.includes('cow');
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
