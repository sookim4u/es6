CALC.createNameSpace("CALC.visitor.expression.NumberExpression");

CALC.visitor.expression.NumberExpression = (function() {
	
	let AbstractExpression = CALC.visitor.expression.AbstractExpression;
	
	class NumberExpression extends AbstractExpression {
		
		constructor(value) {
			super();
			
			this.value = value;
		}
	
		operate() {
			return this.value;
		}
		
		toString() {
			return "NumberExpression";
		}
		
	}
	
	return NumberExpression;
	
}());
