CALC.createNameSpace("CALC.visitor.expression.VariableExpression");

CALC.visitor.expression.VariableExpression = (function() {
	
	let AbstractExpression = CALC.visitor.expression.AbstractExpression;
	
	class VariableExpression extends AbstractExpression {
		
		constructor(name) {
			super();
			
			this.name = name;
			this.value = 0;
		}
	
		operate() {
			return this.value;
		}
		
		accept(v) {
			v.visit(this);
		}
		
		getName() {
			return this.name;
		}
		
		setValue(value) {
			this.value = value;
		}
		
		toString() {
			return "VariableExpression";
		}
		
	}
	
	return VariableExpression;
	
}());
