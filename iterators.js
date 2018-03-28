/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function(array) {
  // Your code here
array.forEach(function(arrayItem) {
    console.log(arrayItem);
});
}

/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function(temperatures) {
  // Your code here
	 let cls = temperatures.map(function(tempItem) {
	    return ((tempItem - 32) * (5/9))
	});

	 return cls ;

}


/**************************************
* hottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
* - Accepts a threshhold temperature
* - Returns an array of temperatures
*   that exceed the threshhold
***************************************/
const hottestDays = function(temperatures, threshhold) {
  // Your code here
	let high =temperatures.filter(function(tempItem) {
    return (tempItem > threshhold)
});
	return high
}


/******************************************
* logHottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshhold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshhold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function(temperatures, threshhold) {
  // Your code here
  let test = hottestDays(temperatures, threshhold);
  let cels = toCelsius(test);
  let output = logger(cels);

 /* 
let cels = toCelsius(temperatures);
let thre = toCelsius(threshhold);
let test = hottestDays(cels, thre);
let output = logger(test);
*/
return output

}


export {logger, toCelsius, hottestDays, logHottestDays}
