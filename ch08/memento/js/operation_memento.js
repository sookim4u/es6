CALC.createNameSpace("CALC.memento.OperationMemento");

CALC.memento.OperationMemento = (function() {
	
	class OperationMemento {
		
		constructor(firstNumber, secondNumber) {
			this.firstNumber = firstNumber;
			this.secondNumber = secondNumber;
		}
		
		getFirstNumber() {
			return this.firstNumber;
		}
		
		getSecondNumber() {
			return this.secondNumber;
		}
		
		toString() {
			return "OperationMemento";
		}
		
	}
	
	return OperationMemento;
	
}());
