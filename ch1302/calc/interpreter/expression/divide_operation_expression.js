GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.DivideOperationExpression");

GRAPH.calc.interpreter.expression.DivideOperationExpression = (function() {
	
	let AbstractOperationExpression = GRAPH.calc.interpreter.expression.AbstractOperationExpression;
	
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
