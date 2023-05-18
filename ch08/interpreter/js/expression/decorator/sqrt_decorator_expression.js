CALC.createNameSpace("CALC.interpreter.expression.decorator.SqrtDecoratorExpression");

CALC.interpreter.expression.decorator.SqrtDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = CALC.interpreter.expression.decorator.AbstractDecoratorExpression;
	
	class SqrtDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}
	
		operate() {
			return Math.sqrt(this.expression.operate());
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
