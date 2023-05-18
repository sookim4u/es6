CALC.createNameSpace("CALC.mvp.CalcModel");

CALC.mvp.CalcModel = (function() {
	
	class CalcModel {
		
		constructor() {
			this.firstNumber = 100;
			this.secondNumber = 10;
		}

		getFirstNumber() {
			return this.firstNumber;
		}

		getSecondNumber() {
			return this.secondNumber;
		}

		setFirstNumber(firstNumber) {
			this.firstNumber = firstNumber;
		}

		setSecondNumber(secondNumber) {
			this.secondNumber = secondNumber;
		}

		decreaseFirstNumber() {
			this.firstNumber = this.firstNumber - 1;
		}

		decreaseSecondNumber() {
			this.secondNumber = this.secondNumber - 1;
		}

		increaseFirstNumber() {
			this.firstNumber = this.firstNumber + 1;
		}

		increaseSecondNumber() {
			this.secondNumber = this.secondNumber + 1;
		}
		
	}
	
	return CalcModel;

}());
