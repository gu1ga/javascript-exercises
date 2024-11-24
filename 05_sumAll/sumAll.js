const sumAll = function(interger1, interger2) {
	
	if (interger1 < 0 || interger2 < 0){
		return 'ERROR'
	}

	else if (!Number.isInteger(interger1) || !Number.isInteger(interger2)){
		return 'ERROR'
	}

	let curretInterger = (interger1 < interger2) ? interger1 : interger2
	let finalInterger = (interger1 < interger2) ? interger2 : interger1

	let sum = 0;
	while(curretInterger <= finalInterger){
		sum += curretInterger
		curretInterger++
	}

	return sum
};

// Do not edit below this line
module.exports = sumAll;
