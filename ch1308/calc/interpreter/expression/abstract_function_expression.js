GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.AbstractFunctionExpression");

GRAPH.calc.interpreter.expression.AbstractFunctionExpression = (function() {
	
	let AbstractExpression = GRAPH.calc.interpreter.expression.AbstractExpression;
	
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
