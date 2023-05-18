CALC.createNameSpace("CALC.iterator.SubstractOperation");

CALC.iterator.SubstractOperation = (function() {
	
	let AbstractOperation = CALC.iterator.AbstractOperation;
	
	class SubstractOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		print(firstNumber, secondNumber) {
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			console.log(firstNumber + " - " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "SubstractOperation";
		}
		
	}
	
	return SubstractOperation;
	
}());
