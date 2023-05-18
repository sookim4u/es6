CALC.createNameSpace("CALC.visitor.expression.AbstractOperationExpression");

CALC.visitor.expression.AbstractOperationExpression = (function() {
	
	let AbstractExpression = CALC.visitor.expression.AbstractExpression;
	
	class AbstractOperationExpression extends AbstractExpression {
		
		constructor() {
			super();
			
			this.operandList = [];
		}
	
		addOperandExpression(operandExpression) {
			this.operandList.push(operandExpression);
		}
		
		accept(v) {
			for (let operandExpression of this.operandList) {
				operandExpression.accept(v);
			}
		}
		
		toString() {
			return "AbstractOperationExpression";
		}
		
	}
	
	return AbstractOperationExpression;
	
}());
