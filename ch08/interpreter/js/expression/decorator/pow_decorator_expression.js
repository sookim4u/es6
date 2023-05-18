CALC.createNameSpace("CALC.interpreter.expression.decorator.PowDecoratorExpression");

CALC.interpreter.expression.decorator.PowDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = CALC.interpreter.expression.decorator.AbstractDecoratorExpression;
	
	class PowDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression, exponent) {
			super(expression);
			
			this.exponent = exponent;
		}
	
		operate() {
			return Math.pow(this.expression.operate(), this.exponent);
		}
		
		getFunctionName() {
			return "POW";
		}
		
		toString() {
			return "PowDecoratorExpression";
		}
		
	}
	
	return PowDecoratorExpression;
	
}());
