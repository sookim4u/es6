CALC.createNameSpace("CALC.chain.SubstractOperationHandler");

CALC.chain.SubstractOperationHandler = (function() {
	
	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class SubstractOperationHandler extends AbstractOperationHandler {
		
		constructor(operator) {
			super(operator);
		}
	
		operate(request) {
			let operator = this.getOperator();
	
			let firstNumber = request.getFirstNumber(operator);
			let secondNumber = request.getSecondNumber(operator);
	
			return firstNumber - secondNumber;
		}
		
		toString() {
			return "SubstractOperationHandler";
		}
		
	}
	
	return SubstractOperationHandler;
	
}());
