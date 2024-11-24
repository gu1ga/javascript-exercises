const palindromes = function (testedString) {
	testedString = testedString.toLowerCase().replace(/[,.! ]/g,"")
	let leftCursor = 0
	let rightCursor = testedString.length - 1

	while(leftCursor < rightCursor){

		if (testedString[leftCursor] !== testedString[rightCursor]){
			return false
		}

		leftCursor++
		rightCursor--
	}	
	
	return true
};

// Do not edit below this line
module.exports = palindromes;
