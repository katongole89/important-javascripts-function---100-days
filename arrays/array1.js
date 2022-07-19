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






