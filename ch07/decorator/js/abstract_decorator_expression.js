CALC.createNameSpace("CALC.decorator.AbstractDecoratorExpression");

CALC.decorator.AbstractDecoratorExpression = (function() {
	
	let AbstractExpression = CALC.decorator.AbstractExpression;
	
	class AbstractDecoratorExpression extends AbstractExpression {
		
		constructor(expression) {
			super();
			
			this.expression = expression;
		}
	
		setExpression(expression) {
			this.expression = expression;
		}
		
		toString() {
			return "AbstractDecoratorExpression";
		}
		
	}
	
	return AbstractDecoratorExpression;
	
}());
