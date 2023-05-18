CALC.createNameSpace("CALC.iterator.MultiplyOperation");

CALC.iterator.MultiplyOperation = (function() {
	
	let AbstractOperation = CALC.iterator.AbstractOperation;
	
	class MultiplyOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		print(firstNumber, secondNumber) {
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			console.log(firstNumber + " * " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "MultiplyOperation";
		}
		
	}
	
	return MultiplyOperation;
	
}());
