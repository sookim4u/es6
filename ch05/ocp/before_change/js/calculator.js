CALC.createNameSpace("CALC.ocp.before.Calculator");

CALC.ocp.before.Calculator = (function() {
	
	class Calculator {
		
		constructor() {
			this.addOperation = null;
			this.substractOperation = null;
			this.multiplyOperation = null;
			this.divideOperation = null;
		}
		
		add(firstNumber, secondNumber) {
			let answer = this.addOperation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		substract(firstNumber, secondNumber) {
			let answer = this.substractOperation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		multiply(firstNumber, secondNumber) {
			let answer = this.multiplyOperation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		divide(firstNumber, secondNumber) {
			let answer = this.divideOperation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		setAddOperation(addOperation) {
			this.addOperation = addOperation;
		}
		
		setSubstractOperation(substractOperation) {
			this.substractOperation = substractOperation;
		}
		
		setMultiplyOperation(multiplyOperation) {
			this.multiplyOperation = multiplyOperation;
		}
		
		setDivideOperation(divideOperation) {
			this.divideOperation = divideOperation;
		}
		
		toString() {
			return "Calculator";
		}
		
	}
	
	return Calculator;
	
}());
