CALC.createNameSpace("CALC.decorator.PowDecoratorExpression");

CALC.decorator.PowDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = CALC.decorator.AbstractDecoratorExpression;
	
	class PowDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression, exponent) {
			super(expression);
			
			this.exponent = exponent;
		}
	
		operate() {
			return Math.pow(this.expression.operate(), this.exponent);
		}
		
		toString() {
			return "PowDecoratorExpression";
		}
		
	}
	
	return PowDecoratorExpression;
	
}());
