GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.DivideOperationExpression");

GRAPH.calc.interpreter.expression.DivideOperationExpression = (function() {
	
	let AbstractOperationExpression = GRAPH.calc.interpreter.expression.AbstractOperationExpression;
	let GraphConstants = GRAPH.app.GraphConstants;
	
	class DivideOperationExpression extends AbstractOperationExpression {
		
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
			
			if (secondResult === 0) {
				return GraphConstants.INFINITE_NUMBER;
			}
			
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
