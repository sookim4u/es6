CALC.createNameSpace("CALC.decorator.SqrtDecoratorExpression");

CALC.decorator.SqrtDecoratorExpression = (function() {
	
	let AbstractDecoratorExpression = CALC.decorator.AbstractDecoratorExpression;
	
	class SqrtDecoratorExpression extends AbstractDecoratorExpression {
		
		constructor(expression) {
			super(expression);
		}
	
		operate() {
			return Math.sqrt(this.expression.operate());
		}
		
		toString() {
			return "SqrtDecoratorExpression";
		}
		
	}
	
	return SqrtDecoratorExpression;
	
}());
