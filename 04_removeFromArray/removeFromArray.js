const removeFromArray = function(array, ...elements) {
	let outputArray = []

	for (arrayElement of array){
		if (!elements.includes(arrayElement)){
			outputArray.push(arrayElement)
		}
	}

	return outputArray 
};
// Do not edit below this line
module.exports = removeFromArray;
