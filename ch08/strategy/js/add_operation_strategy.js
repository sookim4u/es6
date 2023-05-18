CALC.createNameSpace("CALC.strategy.AddOperationStrategy");

CALC.strategy.AddOperationStrategy = (function() {
	
	let AbstractOperationStrategy = CALC.strategy.AbstractOperationStrategy;
	
	class AddOperationStrategy extends AbstractOperationStrategy {
		
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
			return "AddOperationStrategy";
		}
		
	}
	
	return AddOperationStrategy;
	
}());
