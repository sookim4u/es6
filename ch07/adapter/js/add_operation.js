CALC.createNameSpace("CALC.adapter.AddOperation");

CALC.adapter.AddOperation = (function() {
	
	let AbstractOperationTarget = CALC.adapter.AbstractOperationTarget;
	
	class AddOperation extends AbstractOperationTarget {
	
		constructor() {
			super();
		}
	
		operate(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		toString() {
			return "AddOperation";
		}
		
	}
	
	return AddOperation;
	
}());
