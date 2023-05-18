CALC.createNameSpace("CALC.factorymethod.AddOperator");

CALC.factorymethod.AddOperator = (function() {
	
	let AbstractOperator = CALC.factorymethod.AbstractOperator;
	
	class AddOperator extends AbstractOperator {
		
		constructor() {
			super();
		}
	
		getAnswer(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		getDescription() {
			return "+";
		}
		
		toString() {
			return "AddOperator";
		}
		
	}
	
	return AddOperator;
	
}());
