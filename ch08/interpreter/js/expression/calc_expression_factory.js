CALC.createNameSpace("CALC.interpreter.expression.CalcExpressionFactory");

CALC.interpreter.expression.CalcExpressionFactory = (function() {
	
	class CalcExpressionFactory {
		
		constructor() {
			
		}
		
		static createExpression(calcToken) {
			
			let CalcToken = CALC.interpreter.CalcToken;
			
			let NumberExpression = CALC.interpreter.expression.NumberExpression;
			let AddOperationExpression = CALC.interpreter.expression.AddOperationExpression;
			let SubstractOperationExpression = CALC.interpreter.expression.SubstractOperationExpression;
			let MultiplyOperationExpression = CALC.interpreter.expression.MultiplyOperationExpression;
			let DivideOperationExpression = CALC.interpreter.expression.DivideOperationExpression;
			let SqrtDecoratorExpression = CALC.interpreter.expression.decorator.SqrtDecoratorExpression;
			let FracDecoratorExpression = CALC.interpreter.expression.decorator.FracDecoratorExpression;
			let PowDecoratorExpression = CALC.interpreter.expression.decorator.PowDecoratorExpression;
			
			let expression = null;
	
			if (calcToken != null) {
				if (calcToken.getType() === CalcToken.NUMBER) {
					expression = new NumberExpression(parseInt(calcToken.getToken(), 10));
				} 			
				else if (calcToken.getType() === CalcToken.FUNCTION) {
					if (calcToken.getToken() === "SQRT") {
						expression = new SqrtDecoratorExpression();
					} 
					else if (calcToken.getToken() === "FRAC") {
						expression = new FracDecoratorExpression();
					} 
					else if (calcToken.getToken() === "POW") {
						expression = new PowDecoratorExpression();
					} 
					else if (calcToken.getToken() === "ADD") {
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
