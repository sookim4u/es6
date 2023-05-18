CALC.createNameSpace("CALC.iterator.AddOperation");

CALC.iterator.AddOperation = (function() {
	
	let AbstractOperation = CALC.iterator.AbstractOperation;
	
	class AddOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		print(firstNumber, secondNumber) {
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			console.log(firstNumber + " + " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "AddOperation";
		}
		
	}
	
	return AddOperation;
	
}());
