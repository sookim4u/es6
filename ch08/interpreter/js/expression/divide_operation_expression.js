CALC.createNameSpace("CALC.interpreter.expression.DivideOperationExpression");

CALC.interpreter.expression.DivideOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.interpreter.expression.AbstractOperationExpression;
	
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
		
		getFunctionName() {
			return "DIV";
		}
		
		toString() {
			return "DivideOperationExpression";
		}
		
	}
	
	return DivideOperationExpression;
	
}());
