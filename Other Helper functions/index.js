

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// setInterval(func, millseconds)
// Display "Hello" every second (1000 milliseconds):
const setIntervalFunc = () => {
	setInterval(()=>console.log('check interval'), 2000)
}
//call function to see result
// setIntervalFunc()
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// setTimeout(func, millseconds)
// Wait 5 seconds for the greeting:
const setTimeoutFunc = () => {
	setTimeout(()=>console.log('check timeout'), 2000)
}
//call function to see result
// setTimeoutFunc()
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// Object.entries(obj)
// convert object into array
const objectEntriesFunc = (obj) => {
	let newArray = Object.entries(obj)
    console.log(newArray)
}
//call function to see result
// objectEntriesFunc({name:'katongole', year:'1994'})
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++

// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// typeof
// identify the type of a vriable
const typeOfFunc = (obj) => {
	let theTypeOf = typeof obj
    console.log(theTypeOf)
}
//call function to see result
// typeOfFunc('katongole')
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// Object.keys
// Returns an array of keys for a given array
let TestArr = ['man city', 'arsenal', 'liverpool', 'man united']
const objectKeysFunc = (arr) => {
	let theKeysArr = Object.keys(arr)
	console.log('the keys', theKeysArr)
}
//call function to see result
// objectKeysFunc(TestArr)
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++ start +++++++++++++++++++++++++++++++++++++
// Math.random() used with Math.floor()
// Math.random() always returns a number lower than 1.
// Math.random() used with Math.floor() can be used to return random integers.

const MathRandomFunc = () => {
	//testing Math.random()
	console.log(Math.random())

	//using Math.random() with Math.floor
	console.log(Math.floor(Math.random()))

	//Testing different ranges
	// Returns a random integer from 0 to 9:
	console.log(Math.floor(Math.random()*10))

	// Returns a random integer from 0 to 10:
	console.log(Math.floor(Math.random()*11))

	// Returns a random integer from 1 to 10:
	console.log(Math.floor(Math.random()*10))+1
	
}
//call function to see result
MathRandomFunc()
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++