CALC.createNameSpace("CALC.templatemethod.AbstractOperation");

CALC.templatemethod.AbstractOperation = (function() {
	
	class AbstractOperation {
		
		constructor() {
			this.firstNumber = 0;
			this.secondNumber = 0;
		}
		
		getAnswer(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getOperator() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		operate() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let operator = this.getOperator();
	
			let answer = this.getAnswer(firstNumber, secondNumber);
	
			let result = firstNumber + operator + secondNumber + " = " + answer;
	
			this.print(result);
		}
		
		print(result) {
			console.log(result);
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
			
		toString() {
			return "AbstractOperation";
		}
		
	}
	
	return AbstractOperation;
	
}());
