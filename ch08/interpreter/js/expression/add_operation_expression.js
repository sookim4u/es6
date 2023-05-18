CALC.createNameSpace("CALC.interpreter.expression.AddOperationExpression");

CALC.interpreter.expression.AddOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.interpreter.expression.AbstractOperationExpression;
	
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
		
		getFunctionName() {
			return "ADD";
		}
		
		toString() {
			return "AddOperationExpression";
		}
		
	}
	
	return AddOperationExpression;
	
}());
