CALC.createNameSpace("CALC.visitor.SetValueToVariableVisitor");

CALC.visitor.SetValueToVariableVisitor = (function() {
	
	let AbstractVisitor = CALC.visitor.AbstractVisitor;
	
	class SetValueToVariableVisitor extends AbstractVisitor {
		
		constructor(variableName, value) {
			super();
			
			this.variableName = variableName;
			this.value = value;
		}
	
		visit(expression) {
			if (expression.getName() === this.variableName) {
				expression.setValue(this.value);
			}
		}
		
		toString() {
			return "SetValueToVariableVisitor";
		}
		
	}
	
	return SetValueToVariableVisitor;
	
}());
