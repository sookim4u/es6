CALC.createNameSpace("CALC.strategy.DivideOperationStrategy");

CALC.strategy.DivideOperationStrategy = (function() {
	
	let AbstractOperationStrategy = CALC.strategy.AbstractOperationStrategy;
	
	class DivideOperationStrategy extends AbstractOperationStrategy {
		
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
			return "DivideOperationStrategy";
		}
		
	}
	
	return DivideOperationStrategy;
	
}());
