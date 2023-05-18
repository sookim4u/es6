CALC.createNameSpace("CALC.abstractfactory.IntegerNumberOperandProduct");

CALC.abstractfactory.IntegerNumberOperandProduct = (function() {
	
	let AbstractNumberOperandProduct = CALC.abstractfactory.AbstractNumberOperandProduct;
	
	class IntegerNumberOperandProduct extends AbstractNumberOperandProduct {
		
		constructor(value) {
			super(value);
		}
		
		getNumber() {
			let value = this.getValue();		
			return parseInt(value);
		}
		
		toString() {
			return "IntegerNumberOperandProduct";
		}
		
	}
	
	return IntegerNumberOperandProduct;
	
}());
