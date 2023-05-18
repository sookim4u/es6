CALC.createNameSpace("CALC.factorymethod.SubstractOperator");

CALC.factorymethod.SubstractOperator = (function() {
	
	let AbstractOperator = CALC.factorymethod.AbstractOperator;
	
	class SubstractOperator extends AbstractOperator {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		getDescription() {
			return "-";
		}
		
		toString() {
			return "SubstractOperator";
		}
		
	}
	
	return SubstractOperator;
	
}());
