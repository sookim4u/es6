CALC.createNameSpace("CALC.decorator.AbstractExpression");

CALC.decorator.AbstractExpression = (function() {
	
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
