CALC.createNameSpace("CALC.abstractfactory.DoubleNumberOperandProduct");

CALC.abstractfactory.DoubleNumberOperandProduct = (function() {
	
	let AbstractNumberOperandProduct = CALC.abstractfactory.AbstractNumberOperandProduct;
	
	class DoubleNumberOperandProduct extends AbstractNumberOperandProduct {
		
		constructor(value) {
			super(value);
		}
		
		getNumber() {
			let value = this.getValue();		
			return parseFloat(value);
		}
		
		toString() {
			return "DoubleNumberOperandProduct";
		}
		
	}
	
	return DoubleNumberOperandProduct;
	
}());
