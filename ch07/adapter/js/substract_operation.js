CALC.createNameSpace("CALC.adapter.SubstractOperation");

CALC.adapter.SubstractOperation = (function() {
	
	let AbstractOperationTarget = CALC.adapter.AbstractOperationTarget;
	
	class SubstractOperation extends AbstractOperationTarget {
		
		constructor() {
			super();
		}
	
		operate(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		toString() {
			return "SubstractOperation";
		}
	}
	
	return SubstractOperation;
	
}());
