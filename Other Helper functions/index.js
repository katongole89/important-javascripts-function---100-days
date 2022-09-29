

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
setTimeoutFunc()
// +++++++++++++++++++++++++++++++++ end +++++++++++++++++++++++++++++++++++++