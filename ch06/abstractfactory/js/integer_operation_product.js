CALC.createNameSpace("CALC.abstractfactory.IntegerOperationProduct");

CALC.abstractfactory.IntegerOperationProduct = (function() {
	
	let AbstractOperationProduct = CALC.abstractfactory.AbstractOperationProduct;
	
	class IntegerOperationProduct extends AbstractOperationProduct {
		
		constructor() {
			super();
		}
		
		print() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			console.log(firstNumber + " + " + secondNumber + " = " + this.add());
			console.log(firstNumber + " - " + secondNumber + " = " + this.substract());
			console.log(firstNumber + " * " + secondNumber + " = " + this.multiply());
			console.log(firstNumber + " / " + secondNumber + " = " + this.divide());
		}
		
		toString() {
			return "IntegerOperationProduct";
		}
		
	}
	
	return IntegerOperationProduct;
	
}());
