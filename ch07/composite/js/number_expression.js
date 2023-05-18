CALC.createNameSpace("CALC.composite.NumberExpression");

CALC.composite.NumberExpression = (function() {
	
	let AbstractExpression = CALC.composite.AbstractExpression;
	
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
