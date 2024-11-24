const fibonacci = function(position) {

	position = Number(position)

	if (position < 0 ){
		return "OOPS"
	}

	if (position === 0){
		return 0
	}

	else if (position === 2){
		return 1
	}

	else if (position === 1){
		return 1
	}else{
		return fibonacci(position - 1) + fibonacci(position - 2)

	}
};

// Do not edit below this line
module.exports = fibonacci;
