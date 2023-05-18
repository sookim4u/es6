CALC.createNameSpace("CALC.interpreter.expression.NumberExpression");

CALC.interpreter.expression.NumberExpression = (function() {
	
	let AbstractExpression = CALC.interpreter.expression.AbstractExpression;
	
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
