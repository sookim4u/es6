CALC.createNameSpace("CALC.abstractfactory.DoubleOperationFactory");

CALC.abstractfactory.DoubleOperationFactory = (function() {
	
	let AbstractOperationFactory = CALC.abstractfactory.AbstractOperationFactory;
	
	let DoubleOperationProduct = CALC.abstractfactory.DoubleOperationProduct;
	let DoubleNumberOperandProduct = CALC.abstractfactory.DoubleNumberOperandProduct;
	
	class DoubleOperationFactory extends AbstractOperationFactory {
	
		constructor() {
			super();
		}
		
		createOperationProduct() {
			return new DoubleOperationProduct();
		}
		
		createNumberOperandProduct(value) {
			return new DoubleNumberOperandProduct(value);
		}
		
		toString() {
			return "DoubleOperationFactory";
		}
		
	}
	
	return DoubleOperationFactory;
	
}());
