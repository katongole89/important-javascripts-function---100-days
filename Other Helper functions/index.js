

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