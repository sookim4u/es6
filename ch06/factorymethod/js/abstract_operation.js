CALC.createNameSpace("CALC.factorymethod.AbstractOperation");

CALC.factorymethod.AbstractOperation = (function() {
	
	class AbstractOperation {
		
		constructor() {
			this.firstNumber = 0;
			this.secondNumber = 0;
		}
		
		operate() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let operator = this.getOperator();
	
			let operatorDescription = operator.getDescription();
	
			let answer = operator.getAnswer(firstNumber, secondNumber);
	
			let result = firstNumber + operatorDescription + secondNumber + " = " + answer;
	
			this.print(result);
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
		
		toString() {
			return "AbstractOperation";
		}
		
	}
	
	return AbstractOperation;
	
}());
