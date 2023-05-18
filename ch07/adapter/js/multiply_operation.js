CALC.createNameSpace("CALC.adapter.MultiplyOperation");

CALC.adapter.MultiplyOperation = (function() {
	
	let AbstractOperationTarget = CALC.adapter.AbstractOperationTarget;
	
	class MultiplyOperation extends AbstractOperationTarget {
		
		constructor() {
			super();
		}
		
		operate(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		toString() {
			return "MultiplyOperation";
		}
		
	}
	
	return MultiplyOperation;
	
}());
