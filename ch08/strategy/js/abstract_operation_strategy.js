CALC.createNameSpace("CALC.strategy.AbstractOperationStrategy");

CALC.strategy.AbstractOperationStrategy = (function() {
	
	class AbstractOperationStrategy {
		
		constructor() {
			
		}
		
		getAnswer(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getOperator() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperationStrategy";
		}
	
	}	
		
	return AbstractOperationStrategy;
	
}());
