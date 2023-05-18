CALC.createNameSpace("CALC.visitor.expression.AbstractExpression");

CALC.visitor.expression.AbstractExpression = (function() {
	
	class AbstractExpression {
		
		constructor() {
			
		}
		
		operate() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		accept(v) {
			
		}
		
		toString() {
			return "AbstractExpression";
		}
		
	}
	
	return AbstractExpression;
	
}());
