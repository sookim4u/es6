GRAPH.createNameSpace("GRAPH.calc.visitor.AbstractVisitor");

GRAPH.calc.visitor.AbstractVisitor = (function() {
	
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
