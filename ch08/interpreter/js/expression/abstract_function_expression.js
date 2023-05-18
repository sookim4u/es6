CALC.createNameSpace("CALC.interpreter.expression.AbstractFunctionExpression");

CALC.interpreter.expression.AbstractFunctionExpression = (function() {
	
	let AbstractExpression = CALC.interpreter.expression.AbstractExpression;
	
	class AbstractFunctionExpression extends AbstractExpression {
		
		constructor() {
			super();
		}
	
		getFunctionName() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractFunctionExpression";
		}
		
	}
	
	return AbstractFunctionExpression;
	
}());
