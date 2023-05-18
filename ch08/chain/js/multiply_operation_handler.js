CALC.createNameSpace("CALC.chain.MultiplyOperationHandler");

CALC.chain.MultiplyOperationHandler = (function() {
	
	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class MultiplyOperationHandler extends AbstractOperationHandler {
		
		constructor(operator) {
			super(operator);
		}
	
		operate(request) {
			let operator = this.getOperator();
	
			let firstNumber = request.getFirstNumber(operator);
			let secondNumber = request.getSecondNumber(operator);
	
			return firstNumber * secondNumber;
		}
		
		toString() {
			return "MultiplyOperationHandler";
		}
		
	}
	
	return MultiplyOperationHandler;
	
}());
