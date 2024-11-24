const reverseString = function(string) {

	let reversedArray = []
	
	let i = string.length - 1
	while(i >= 0){
		reversedArray.push(string[i])
		i--
	}
	
	return reversedArray.join("") 
};


// Do not edit below this line
module.exports = reverseString;
