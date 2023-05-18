GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.AbstractOperationExpression");

GRAPH.calc.interpreter.expression.AbstractOperationExpression = (function() {
	
	let AbstractFunctionExpression = GRAPH.calc.interpreter.expression.AbstractFunctionExpression;
	
	class AbstractOperationExpression extends AbstractFunctionExpression {
		
		constructor() {
			super();
			
			this.operandList = [];
		}

		operate() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		addOperandExpression(operandExpression) {
			this.operandList.push(operandExpression);
		}
	
		parse(context) {
			let CalcExpressionFactory = GRAPH.calc.interpreter.expression.CalcExpressionFactory;
			
			context.skipToken(this.getFunctionName());

			context.getCurrentTokenAndGoToNext();
			context.skipToken("(");

			let currentToken = context.getCurrentTokenAndGoToNext();

			let operandExpression = CalcExpressionFactory.createExpression(currentToken);
			operandExpression.parse(context);

			this.addOperandExpression(operandExpression);

			context.getCurrentTokenAndGoToNext();
			context.skipToken(",");

			currentToken = context.getCurrentTokenAndGoToNext();

			operandExpression = CalcExpressionFactory.createExpression(currentToken);
			operandExpression.parse(context);

			this.addOperandExpression(operandExpression);

			context.getCurrentTokenAndGoToNext();
			context.skipToken(")");
		}
		
		toString() {
			return "AbstractOperationExpression";
		}
		
	}
	
	return AbstractOperationExpression;
	
}());
