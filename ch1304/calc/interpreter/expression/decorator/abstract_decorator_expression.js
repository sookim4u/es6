GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression");

GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression = (function() {
	
	let AbstractFunctionExpression = GRAPH.calc.interpreter.expression.AbstractFunctionExpression;
	
	let CalcExpressionFactory = GRAPH.calc.interpreter.expression.CalcExpressionFactory;
	
	class AbstractDecoratorExpression extends AbstractFunctionExpression {
		
		constructor(expression) {
			super();
			
			this.expression = expression;
		}

		setExpression(expression) {
			this.expression = expression;
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
			context.skipToken(")");
		}
		
		toString() {
			return "AbstractDecoratorExpression";
		}
		
	}
	
	return AbstractDecoratorExpression;
	
}());
