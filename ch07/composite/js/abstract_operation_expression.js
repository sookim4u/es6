CALC.createNameSpace("CALC.composite.AbstractOperationExpression");

CALC.composite.AbstractOperationExpression = (function() {
	
	let AbstractExpression = CALC.composite.AbstractExpression;
	
	class AbstractOperationExpression extends AbstractExpression {
		
		constructor() {
			super();
			
			this.operandList = [];
		}
	
		addOperandExpression(operandExpression) {
			this.operandList.push(operandExpression);
		}
		
		toString() {
			return "AbstractOperationExpression";
		}
		
	}
	
	return AbstractOperationExpression;
	
}());
