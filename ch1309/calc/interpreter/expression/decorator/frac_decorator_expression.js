GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.decorator.FracDecoratorExpression");

GRAPH.calc.interpreter.expression.decorator.FracDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression;
	let GraphConstants = GRAPH.app.GraphConstants;
	
	class FracDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}

		operate() {
			let value = this.expression.operate();
			
			if (value === GraphConstants.INFINITE_NUMBER) {
				return GraphConstants.INFINITE_NUMBER;
			}
				
			if (value === 0) {
				return GraphConstants.INFINITE_NUMBER;
			}
			
			return 1 / value;
		}
		
		getFunctionName() {
			return "FRAC";
		}
		
		toString() {
			return "FracDecoratorExpression";
		}
		
	}
	
	return FracDecoratorExpression;
	
}());
