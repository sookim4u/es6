CALC.createNameSpace("CALC.abstractfactory.AbstractNumberOperandProduct");

CALC.abstractfactory.AbstractNumberOperandProduct = (function() {
	
	class AbstractNumberOperandProduct {
		
		constructor(value) {
			this.value = value;
		}
		
		getNumber() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getValue() {
			return this.value;
		}
		
		toString() {
			return "AbstractNumberOperandProduct";
		}
		
	}
	
	return AbstractNumberOperandProduct;
	
}());
