CALC.createNameSpace("CALC.decorator.NumberExpression");

CALC.decorator.NumberExpression = (function() {
	
	let AbstractExpression = CALC.decorator.AbstractExpression;
	
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
