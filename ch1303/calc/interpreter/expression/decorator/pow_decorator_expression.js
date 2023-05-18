GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.decorator.PowDecoratorExpression");

GRAPH.calc.interpreter.expression.decorator.PowDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression;
	let CalcExpressionFactory = GRAPH.calc.interpreter.expression.CalcExpressionFactory;
	
	class PowDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
			
			this.exponent = 2;
		}

		operate() {
			let base = this.expression.operate();
			
			return Math.pow(base, this.exponent);
		}
		
		getFunctionName() {
			return "POW";
		}
		
		parse(context) {
			context.skipToken(this.getFunctionName());
			
			context.getCurrentTokenAndGoToNext();
			
			context.skipToken("(");
						
			let currentToken = context.getCurrentTokenAndGoToNext();
			
			let expression = CalcExpressionFactory.createExpression(currentToken);
			expression.parse(context);
					
			this.setExpression(expression);  
			
			context.getCurrentTokenAndGoToNext();
			context.skipToken(",");

			currentToken = context.getCurrentTokenAndGoToNext();

			let operandExpression = CalcExpressionFactory.createExpression(currentToken);
			operandExpression.parse(context);
			
			this.exponent = operandExpression.operate();
			
			context.getCurrentTokenAndGoToNext();
			context.skipToken(")");
		}
		
		toString() {
			return "PowDecoratorExpression";
		}
		
	}
	
	return PowDecoratorExpression;
	
}());
