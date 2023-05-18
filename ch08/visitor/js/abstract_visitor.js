CALC.createNameSpace("CALC.visitor.AbstractVisitor");

CALC.visitor.AbstractVisitor = (function() {
	
	class AbstractVisitor {
		
		constructor() {
			
		}
		
		visit(expression) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractVisitor";
		}
		
	}
	
	return AbstractVisitor;
	
}());
