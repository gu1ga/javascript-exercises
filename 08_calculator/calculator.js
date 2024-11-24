const add = function(number1, number2) {
	return number1 + number2	
};

const subtract = function(number1, number2) {
	return number1 - number2	
};

const sum = function(numberArray) {
	let sum = 0

	for (number of numberArray){
		sum += number
	}

	return sum
	
};

const multiply = function(numberArray) {
	let multiplication = 1

	for (number of numberArray){
		multiplication = multiplication*number 
	}

	return multiplication
};

const power = function(number, power) {
	let result = 1
	let step = 1

	while(step <= power){
		result = result*number
		step++
	}
	return result
};

const factorial = function(number) {
	
	if (number < 0){
		return 'ERROR'
	}

	else if (number <= 1){
		return 1
	}else{
		return number * factorial(number - 1)
	}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
