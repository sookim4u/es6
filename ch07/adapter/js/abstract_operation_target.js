CALC.createNameSpace("CALC.adapter.AbstractOperationTarget");

CALC.adapter.AbstractOperationTarget = (function() {
	
	class AbstractOperationTarget {
		
		constructor() {
			
		}
		
		operate(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperationTarget";
		}
		
	}
	
	return AbstractOperationTarget;
	
}());
