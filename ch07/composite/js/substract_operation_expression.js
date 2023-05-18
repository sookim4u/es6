CALC.createNameSpace("CALC.composite.SubstractOperationExpression");

CALC.composite.SubstractOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.composite.AbstractOperationExpression;
	
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
