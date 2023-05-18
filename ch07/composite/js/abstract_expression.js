CALC.createNameSpace("CALC.composite.AbstractExpression");

CALC.composite.AbstractExpression = (function() {
	
	class AbstractExpression {
		
		constructor() {
			
		}
		
		operate() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractExpression";
		}
		
	}
	
	return AbstractExpression;
	
}());
