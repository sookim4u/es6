GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.MultiplyOperationExpression");

GRAPH.calc.interpreter.expression.MultiplyOperationExpression = (function() {
	
	let AbstractOperationExpression = GRAPH.calc.interpreter.expression.AbstractOperationExpression;
	
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
