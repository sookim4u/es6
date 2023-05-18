CALC.createNameSpace("CALC.decorator.FracDecoratorExpression");

CALC.decorator.FracDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = CALC.decorator.AbstractDecoratorExpression;
	
	class FracDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}
	
		operate() {
			return 1 / this.expression.operate();
		}
		
		toString() {
			return "FracDecoratorExpression";
		}
		
	}
	
	return FracDecoratorExpression;
	
}());
