CALC.createNameSpace("CALC.visitor.expression.AddOperationExpression");

CALC.visitor.expression.AddOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.visitor.expression.AbstractOperationExpression;
	
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
