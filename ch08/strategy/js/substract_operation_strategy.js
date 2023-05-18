CALC.createNameSpace("CALC.strategy.SubstractOperationStrategy");

CALC.strategy.SubstractOperationStrategy = (function() {
	
	let AbstractOperationStrategy = CALC.strategy.AbstractOperationStrategy;
	
	class SubstractOperationStrategy extends AbstractOperationStrategy {
		
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
			return "SubstractOperationStrategy";
		}
		
	}
	
	return SubstractOperationStrategy;
	
}());
