CALC.createNameSpace("CALC.templatemethod.AddOperation");

CALC.templatemethod.AddOperation = (function() {
	
	let AbstractOperation = CALC.templatemethod.AbstractOperation;
	
	class AddOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		getOperator() {
			return "+";
		}
		
		toString() {
			return "AddOperation";
		}
		
	}
	
	return AddOperation;
	
}());
