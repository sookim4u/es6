CALC.createNameSpace("CALC.factorymethod.DivideOperator");

CALC.factorymethod.DivideOperator = (function() {
	
	let AbstractOperator = CALC.factorymethod.AbstractOperator;
	
	class DivideOperator extends AbstractOperator {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
		getDescription() {
			return "/";
		}
		
		toString() {
			return "DivideOperator";
		}
		
	}
	
	return DivideOperator;
	
}());
