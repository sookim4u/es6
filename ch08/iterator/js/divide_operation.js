CALC.createNameSpace("CALC.iterator.DivideOperation");

CALC.iterator.DivideOperation = (function() {
	
	let AbstractOperation = CALC.iterator.AbstractOperation;
	
	class DivideOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
		print(firstNumber, secondNumber) {
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			console.log(firstNumber + " / " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "DivideOperation";
		}
	}
	
	return DivideOperation;
	
}());
