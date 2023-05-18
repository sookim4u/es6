CALC.createNameSpace("CALC.strategy.MultiplyOperationStrategy");

CALC.strategy.MultiplyOperationStrategy = (function() {
	
	let AbstractOperationStrategy = CALC.strategy.AbstractOperationStrategy;
	
	class MultiplyOperationStrategy extends AbstractOperationStrategy {
		
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
			return "MultiplyOperationStrategy";
		}
		
	}
	
	return MultiplyOperationStrategy;
	
}());
