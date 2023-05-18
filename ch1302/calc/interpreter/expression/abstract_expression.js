GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.AbstractExpression");

GRAPH.calc.interpreter.expression.AbstractExpression = (function() {
	
	class AbstractExpression {
		
		constructor() {
			
		}
		
		parse(context) {
			throw new Error("You have to implement the method doSomething!");
		}
	
		operate() {
			
		}
		
		toString() {
			return "AbstractExpression";
		}
		
	}
	
	return AbstractExpression;
	
}());
