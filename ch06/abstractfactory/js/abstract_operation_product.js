CALC.createNameSpace("CALC.abstractfactory.AbstractOperationProduct");

CALC.abstractfactory.AbstractOperationProduct = (function() {
	
	class AbstractOperationProduct {
		
		constructor() {
			this.firstNumberOperandProduct = null;
			this.secondNumberOperandProduct = null;
		}
		
		print() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		setFirstNumberOperandProduct(firstNumberOperandProduct) {
			this.firstNumberOperandProduct = firstNumberOperandProduct;
		}
		
		setSecondNumberOperandProduct(secondNumberOperandProduct) {
			this.secondNumberOperandProduct = secondNumberOperandProduct;
		}
		
		add() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber + secondNumber;
		}
		
		divide() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber / secondNumber;
		}
		
		multiply() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber * secondNumber;
		}
		
		substract() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
			
			return firstNumber - secondNumber;
		}
		
		getFirstNumber() {
			return this.firstNumberOperandProduct.getNumber();
		}
		
		getSecondNumber() {
			return this.secondNumberOperandProduct.getNumber();
		}
		
		toString() {
			return "AbstractOperationProduct";
		}
		
	}
	
	return AbstractOperationProduct;
	
}());
