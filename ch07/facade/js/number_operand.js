CALC.createNameSpace("CALC.facade.NumberOperand");

CALC.facade.NumberOperand = (function() {
	
	class NumberOperand {
		
		constructor(value) {
			this.value = value;
		}
		
		getNumber() {
			return parseInt(this.value, 10);
		}
		
		toString() {
			return "NumberOperand";
		}
		
	}
	
	return NumberOperand;
	
}());
