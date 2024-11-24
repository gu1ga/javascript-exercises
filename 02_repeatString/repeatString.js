const repeatString = function(string, multiplier) {
	if (multiplier < 0){
		return 'ERROR'
	}

	let finalString = '';
	let repetition = 1;

	while(repetition <= multiplier){
		finalString += string;
		repetition++;
	}

	return finalString	
};

// Do not edit below this line
module.exports = repeatString;
