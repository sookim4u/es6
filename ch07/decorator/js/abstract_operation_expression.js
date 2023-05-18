CALC.createNameSpace("CALC.decorator.AbstractOperationExpression");

CALC.decorator.AbstractOperationExpression = (function() {
	
	let AbstractExpression = CALC.decorator.AbstractExpression;
	
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
