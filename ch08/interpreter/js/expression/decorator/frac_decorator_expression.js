CALC.createNameSpace("CALC.interpreter.expression.decorator.FracDecoratorExpression");

CALC.interpreter.expression.decorator.FracDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = CALC.interpreter.expression.decorator.AbstractDecoratorExpression;
	
	class FracDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}
	
		operate() {
			return 1 / this.expression.operate();
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
