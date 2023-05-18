CALC.createNameSpace("CALC.interpreter.expression.SubstractOperationExpression");

CALC.interpreter.expression.SubstractOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.interpreter.expression.AbstractOperationExpression;
	
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
		
		getFunctionName() {
			return "SUB";
		}
		
		toString() {
			return "SubstractOperationExpression";
		}
		
	}
	
	return SubstractOperationExpression;
	
}());
