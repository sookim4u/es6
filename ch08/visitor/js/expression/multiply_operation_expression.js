CALC.createNameSpace("CALC.visitor.expression.MultiplyOperationExpression");

CALC.visitor.expression.MultiplyOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.visitor.expression.AbstractOperationExpression;
	
	class MultiplyOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate() {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult * secondResult;
		}
		
		toString() {
			return "MultiplyOperationExpression";
		}
		
	}
	
	return MultiplyOperationExpression;
	
}());
