CALC.createNameSpace("CALC.chain.DivideOperationHandler");

CALC.chain.DivideOperationHandler = (function() {
	
	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class DivideOperationHandler extends AbstractOperationHandler {
		
		constructor(operator) {
			super(operator);
		}
	
		operate(request) {
			let operator = this.getOperator();
	
			let firstNumber = request.getFirstNumber(operator);
			let secondNumber = request.getSecondNumber(operator);
	
			return firstNumber / secondNumber;
		}
		
		toString() {
			return "DivideOperationHandler";
		}
		
	}
	
	return DivideOperationHandler;
	
}());
