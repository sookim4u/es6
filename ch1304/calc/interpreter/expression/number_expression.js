GRAPH.createNameSpace("GRAPH.calc.interpreter.expression.NumberExpression");

GRAPH.calc.interpreter.expression.NumberExpression = (function() {
	
	let AbstractExpression = GRAPH.calc.interpreter.expression.AbstractExpression;
	
	class NumberExpression extends AbstractExpression {
		
		constructor(value) {
			super();
			
			this.value = value;
		}

		operate() {
			return this.value;
		}
		
		parse(context) {
			
		}
		
		toString() {
			return "NumberExpression";
		}
		
	}
	
	return NumberExpression;
	
}());
