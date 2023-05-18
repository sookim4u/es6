GRAPH.createNameSpace("GRAPH.calc.visitor.SetValueToVariableVisitor");

GRAPH.calc.visitor.SetValueToVariableVisitor = (function() {
	
	let AbstractVisitor = GRAPH.calc.visitor.AbstractVisitor;
	
	class SetValueToVariableVisitor extends AbstractVisitor {
		
		constructor(variableName, value) {
			super();
			
			this.variableName = variableName;
			this.value = value;
		}
	
		visit(expression) {
			if (expression instanceof GRAPH.calc.interpreter.expression.VariableExpression) {
				if (expression.getName() === this.variableName) {
					expression.setValue(this.value);
				}
			}
		}
		
		toString() {
			return "SetValueToVariableVisitor";
		}
		
	}
	
	return SetValueToVariableVisitor;
	
}());
