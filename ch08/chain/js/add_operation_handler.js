CALC.createNameSpace("CALC.chain.AddOperationHandler");

CALC.chain.AddOperationHandler = (function() {
	
	let AbstractOperationHandler = CALC.chain.AbstractOperationHandler;
	
	class AddOperationHandler extends AbstractOperationHandler {
		
		constructor(operator) {
			super(operator);
		}
	
		operate(request) {
			let operator = this.getOperator();
	
			let firstNumber = request.getFirstNumber(operator);
			let secondNumber = request.getSecondNumber(operator);
	
			return firstNumber + secondNumber;
		}
		
		toString() {
			return "AddOperationHandler";
		}
		
	}
	
	return AddOperationHandler;
	
}());
