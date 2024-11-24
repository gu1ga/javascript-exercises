const findTheOldest = function(personArray) {
	return personArray.reduce((lastPerson, currentPerson) => {
		let oldestPerson = lastPerson
		let lastPersonAge 
		let currentPersonAge
		
		if(lastPerson.yearOfDeath){
			lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth
		}else{
			lastPersonAge= new Date().getFullYear() - lastPerson.yearOfBirth
		}

		if(currentPerson.yearOfDeath){
			currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth
		}else{
			currentPersonAge= new Date().getFullYear() - currentPerson.yearOfBirth
		}

		if (currentPersonAge > lastPersonAge){
			oldestPerson = currentPerson
		}

		return oldestPerson
	})
};

// Do not edit below this line
module.exports = findTheOldest;
