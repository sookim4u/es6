CALC.createNameSpace("CALC.templatemethod.SubstractOperation");

CALC.templatemethod.SubstractOperation = (function() {
	
	let AbstractOperation = CALC.templatemethod.AbstractOperation;
	
	class SubstractOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		getOperator() {
			return "-";
		}
		
		toString() {
			return "SubstractOperation";
		}
		
	}
	
	return SubstractOperation;
	
}());
