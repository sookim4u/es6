CALC.createNameSpace("CALC.abstractfactory.DoubleOperationProduct");

CALC.abstractfactory.DoubleOperationProduct = (function() {
	
	let AbstractOperationProduct = CALC.abstractfactory.AbstractOperationProduct;
	
	class DoubleOperationProduct extends AbstractOperationProduct {
		
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
			return "DoubleOperationProduct";
		}
		
	}
	
	return DoubleOperationProduct;
	
}());
