CALC.createNameSpace("CALC.abstractfactory.AbstractOperationFactory");

CALC.abstractfactory.AbstractOperationFactory = (function() {
	
	class AbstractOperationFactory {
		
		constructor() {
			
		}
		
		createOperationProduct() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		createNumberOperandProduct(value) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperationFactory";
		}
		
	}
	
	return AbstractOperationFactory;
	
}());
