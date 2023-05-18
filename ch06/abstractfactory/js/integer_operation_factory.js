CALC.createNameSpace("CALC.abstractfactory.IntegerOperationFactory");

CALC.abstractfactory.IntegerOperationFactory = (function() {
	
	let AbstractOperationFactory = CALC.abstractfactory.AbstractOperationFactory;
	
	let IntegerOperationProduct = CALC.abstractfactory.IntegerOperationProduct;
	let IntegerNumberOperandProduct = CALC.abstractfactory.IntegerNumberOperandProduct;
	
	class IntegerOperationFactory extends AbstractOperationFactory {
		
		constructor() {
			super();
		}
		
		createOperationProduct() {
			return new IntegerOperationProduct();
		}
		
		createNumberOperandProduct(value) {
			return new IntegerNumberOperandProduct(value);
		}
		
		toString() {
			return "IntegerOperationFactory";
		}
		
	}
	
	return IntegerOperationFactory;
	
}());
