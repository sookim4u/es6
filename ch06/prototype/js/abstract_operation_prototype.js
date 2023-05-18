CALC.createNameSpace("CALC.prototype.AbstractOperationPrototype");

CALC.prototype.AbstractOperationPrototype = (function() {
	
	class AbstractOperationPrototype {
		
		constructor(operation) {
			this.firstNumber = 0;
			this.secondNumber = 0;
			
			if(operation != null) {
				this.firstNumber = operation.firstNumber;
				this.secondNumber = operation.secondNumber;
			}
		}
		
		getClone() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getAnswer(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getOperator() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getFirstNumber() {
			return this.firstNumber;
		}
		
		setFirstNumber(firstNumber) {
			this.firstNumber = firstNumber;
		}
		
		getSecondNumber() {
			return this.secondNumber;
		}
		
		setSecondNumber(secondNumber) {
			this.secondNumber = secondNumber;
		}
		
		print(result) {
			console.log(result);
		}
		
		operate() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let operator = this.getOperator();
	
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			let result = firstNumber + operator + secondNumber + " = " + answer;
	
			this.print(result);
		}
		
		toString() {
			return "AbstractOperationPrototype";
		}
		
	}
	
	return AbstractOperationPrototype;
	
}());
