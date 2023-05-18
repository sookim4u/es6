CALC.createNameSpace("CALC.templatemethod.MultiplyOperation");

CALC.templatemethod.MultiplyOperation = (function() {
	
	let AbstractOperation = CALC.templatemethod.AbstractOperation;
	
	class MultiplyOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		getOperator() {
			return "*";
		}
		
		toString() {
			return "MultiplyOperation";
		}
		
	}
	
	return MultiplyOperation;
	
}());
