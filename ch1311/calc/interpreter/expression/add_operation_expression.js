GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.AddOperationExpression");

GRAPH.calc.interpreter.expression.AddOperationExpression = (function() {
	
	let AbstractOperationExpression = GRAPH.calc.interpreter.expression.AbstractOperationExpression;
	let GraphConstants = GRAPH.app.GraphConstants;
	
	class AddOperationExpression extends AbstractOperationExpression {
		
		constructor() {
			super();
		}

		operate() {
			let firstOperandExpression = this.operandList[0];
			let secondOperandExpression = this.operandList[1];

			let firstResult = firstOperandExpression.operate();
			let secondResult = secondOperandExpression.operate();
			
			if (firstResult === GraphConstants.INFINITE_NUMBER || secondResult === GraphConstants.INFINITE_NUMBER) {
				return GraphConstants.INFINITE_NUMBER;
			}
			
			if (firstResult === GraphConstants.INVALID_NUMBER || secondResult === GraphConstants.INVALID_NUMBER) {
				return GraphConstants.INVALID_NUMBER;
			}
			
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
