CALC.createNameSpace("CALC.factorymethod.MultiplyOperator");

CALC.factorymethod.MultiplyOperator = (function() {
	
	let AbstractOperator = CALC.factorymethod.AbstractOperator;
	
	class MultiplyOperator extends AbstractOperator {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		getDescription() {
			return "*";
		}
		
		toString() {
			return "MultiplyOperator";
		}
		
	}
	
	return MultiplyOperator;
	
}());
