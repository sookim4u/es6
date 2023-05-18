CALC.createNameSpace("CALC.adapter.DivideOperationAdapter");

CALC.adapter.DivideOperationAdapter = (function() {
	
	let OperationAdaptee = CALC.adapter.OperationAdaptee;
	let AbstractOperationTarget = CALC.adapter.AbstractOperationTarget;
	
	class DivideOperationAdapter extends AbstractOperationTarget {
	
		constructor(operationAdaptee) {
			super();
			
			this.operationAdaptee = operationAdaptee;
		}
	
		operate(firstNumber, secondNumber) {
			return this.operationAdaptee.calculate(OperationAdaptee.DIVIDE_OPERATION, firstNumber, secondNumber);
		}
		
		toString() {
			return "DivideOperationAdapter";
		}
		
	}
	
	return DivideOperationAdapter;
	
}());
