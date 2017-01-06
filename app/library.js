
	var file = {}
	file.computeAverage = function(num1,num2,num3) {
		return ((num1 + num2 + num3) / 3);
	}

	file.computeFactorial = function(num) {
		if (num < 0) {
			return undefined;
		} else if (num <= 1) {
			return 1;
		} else {
			return num * file.computeFactorial(num-1);
		}
	}

	file.convertTempCtoF = function(cTemp) {
		return (((9/5) * cTemp) + 32);
	}

	file.convertTempFtoC = function(fTemp) {
		return ((5/9) * (fTemp - 32));
	}

	module.exports = file;