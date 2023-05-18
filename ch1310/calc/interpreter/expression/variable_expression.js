GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.VariableExpression");

GRAPH.calc.interpreter.expression.VariableExpression = (function() {
	
	let AbstractExpression = GRAPH.calc.interpreter.expression.AbstractExpression;
	
	class VariableExpression extends AbstractExpression {
		
		constructor(name) {
			super();
			
			this.name = name;
			this.value = 0;
		}
		
		operate() {
			return this.value;
		}

		getName() {
			return this.name;
		}

		setValue(value) {
			this.value = value;
		}

		parse(context) {
			
		}
		
		accept(v) {
			v.visit(this);
		}
		
		toString() {
			return "VariableExpression";
		}
		
	}
	
	return VariableExpression;
	
}());
