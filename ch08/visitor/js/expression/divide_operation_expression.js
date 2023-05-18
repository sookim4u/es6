CALC.createNameSpace("CALC.visitor.expression.DivideOperationExpression");

CALC.visitor.expression.DivideOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.visitor.expression.AbstractOperationExpression;
	
	class DivideOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}
	
		operate() {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];
	
			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
	
			return firstResult / secondResult;
		}
		
		toString() {
			return "DivideOperationExpression";
		}
		
	}
	
	return DivideOperationExpression;
	
}());
