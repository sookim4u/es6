CALC.createNameSpace("CALC.decorator.SubstractOperationExpression");

CALC.decorator.SubstractOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.decorator.AbstractOperationExpression;
	
	class SubstractOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate() {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult - secondResult;
		}
		
		toString() {
			return "SubstractOperationExpression";
		}
		
	}
	
	return SubstractOperationExpression;
	
}());
