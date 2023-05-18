CALC.createNameSpace("CALC.memento.OperationOriginator");

CALC.memento.OperationOriginator = (function() {
	
	let OperationMemento = CALC.memento.OperationMemento;
	
	class OperationOriginator {
		
		constructor() {
			this.firstNumber = 0;
			this.secondNumber = 0;
		}
		
		createMemento() {
			return new OperationMemento(this.firstNumber, this.secondNumber);
		}
		
		setMemento(memento) {
			this.firstNumber = memento.getFirstNumber();
			this.secondNumber = memento.getSecondNumber();
		}
		
		printOperations() {
			console.log(this.firstNumber + " + " + this.secondNumber + " = " + (this.firstNumber + this.secondNumber));
			console.log(this.firstNumber + " - " + this.secondNumber + " = " + (this.firstNumber - this.secondNumber));
			console.log(this.firstNumber + " * " + this.secondNumber + " = " + (this.firstNumber * this.secondNumber));
			console.log(this.firstNumber + " / " + this.secondNumber + " = " + (this.firstNumber / this.secondNumber));
		}
		
		setFirstNumber(firstNumber) {
			this.firstNumber = firstNumber;
		}
		
		setSecondNumber(secondNumber) {
			this.secondNumber = secondNumber;
		}
		
		toString() {
			return "OperationOriginator";
		}
		
	}
	
	return OperationOriginator;
	
}());
