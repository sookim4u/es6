GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.CalcExpressionFactory");

GRAPH.calc.interpreter.expression.CalcExpressionFactory = (function() {
	
	class CalcExpressionFactory {
		
		constructor() {
			
		}
		
		static createExpression(calcToken) {
			
			let CalcToken = GRAPH.calc.interpreter.CalcToken;
			
			let NumberExpression = GRAPH.calc.interpreter.expression.NumberExpression;
			let AddOperationExpression = GRAPH.calc.interpreter.expression.AddOperationExpression;
			let SubstractOperationExpression = GRAPH.calc.interpreter.expression.SubstractOperationExpression;
			let MultiplyOperationExpression = GRAPH.calc.interpreter.expression.MultiplyOperationExpression;
			let DivideOperationExpression = GRAPH.calc.interpreter.expression.DivideOperationExpression;
			
			let expression = null;

			if (calcToken !== null) {
				if (calcToken.getType() === CalcToken.NUMBER) {
					expression = new NumberExpression(parseInt(calcToken.getToken(), 10));
				} 			
				else if (calcToken.getType() === CalcToken.FUNCTION) {
					if (calcToken.getToken() === "ADD") {
						expression = new AddOperationExpression();
					} 
					else if (calcToken.getToken() === "SUB") {
						expression = new SubstractOperationExpression();
					}
					else if (calcToken.getToken() === "MUL") {
						expression = new MultiplyOperationExpression();
					} 
					else if (calcToken.getToken() === "DIV") {
						expression = new DivideOperationExpression();
					}
				}
			}
			
			return expression;
		}
		
		toString() {
			return "CalcExpressionFactory";
		}
		
	}
	
	return CalcExpressionFactory;
	
}());
