GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.decorator.SqrtDecoratorExpression");

GRAPH.calc.interpreter.expression.decorator.SqrtDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression;
	let GraphConstants = GRAPH.app.GraphConstants;
	
	class SqrtDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}
		
		operate() {
			let base = this.expression.operate();
			
			if (base === GraphConstants.INFINITE_NUMBER) {
				return GraphConstants.INFINITE_NUMBER;
			}
			
			if (base === GraphConstants.INVALID_NUMBER) {
				return GraphConstants.INVALID_NUMBER;
			}
				
			if (base < 0) {
				return GraphConstants.INVALID_NUMBER;
			}
			
			return Math.sqrt(base);
		}
		
		getFunctionName() {
			return "SQRT";
		}
		
		toString() {
			return "SqrtDecoratorExpression";
		}
		
	}
	
	return SqrtDecoratorExpression;
	
}());
