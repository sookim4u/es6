CALC.createNameSpace("CALC.composite.DivideOperationExpression");

CALC.composite.DivideOperationExpression = (function() {
	
	let AbstractOperationExpression = CALC.composite.AbstractOperationExpression;
	
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
