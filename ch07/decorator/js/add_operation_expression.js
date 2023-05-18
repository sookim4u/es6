CALC.createNameSpace("CALC.decorator.AddOperationExpression");

CALC.decorator.AddOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.decorator.AbstractOperationExpression;
	
	class AddOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate() {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult + secondResult;
		}
		
		toString() {
			return "AddOperationExpression";
		}
		
	}
	
	return AddOperationExpression;
	
}());
