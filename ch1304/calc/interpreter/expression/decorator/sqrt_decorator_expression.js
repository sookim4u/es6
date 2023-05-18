GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.decorator.SqrtDecoratorExpression");

GRAPH.calc.interpreter.expression.decorator.SqrtDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = GRAPH.calc.interpreter.expression.decorator.AbstractDecoratorExpression;
	
	class SqrtDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}
		
		operate() {
			let base = this.expression.operate();
			
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
