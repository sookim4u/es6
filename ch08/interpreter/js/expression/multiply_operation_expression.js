CALC.createNameSpace("CALC.interpreter.expression.MultiplyOperationExpression");

CALC.interpreter.expression.MultiplyOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.interpreter.expression.AbstractOperationExpression;
	
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
		
		getFunctionName() {
			return "MUL";
		}
		
		toString() {
			return "MultiplyOperationExpression";
		}
	
	}
		
	return MultiplyOperationExpression;
	
}());
