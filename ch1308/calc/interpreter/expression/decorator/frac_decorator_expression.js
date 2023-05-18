GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.decorator.FracDecoratorExpression");

GRAPH.calc.interpreter.expression.decorator.FracDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression;
	
	class FracDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}

		operate() {
			let value = this.expression.operate();
			
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
