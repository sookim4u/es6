CALC.createNameSpace("CALC.templatemethod.DivideOperation");

CALC.templatemethod.DivideOperation = (function() {
	
	let AbstractOperation = CALC.templatemethod.AbstractOperation;
	
	class DivideOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
		getOperator() {
			return "/";
		}
		
		toString() {
			return "DivideOperation";
		}
		
	}
	
	return DivideOperation;
	
}());
