CALC.createNameSpace("CALC.observer.MultiplyOperationObserver");

CALC.observer.MultiplyOperationObserver = (function() {
	
	let AbstractOperationObserver = CALC.observer.AbstractOperationObserver;
	
	class MultiplyOperationObserver extends AbstractOperationObserver {
		
		constructor(operationSubject) {
			super(operationSubject);
		}
	
		update() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let answer = firstNumber * secondNumber;
	
			console.log(firstNumber + " * " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "MultiplyOperationObserver";
		}
		
	}
	
	return MultiplyOperationObserver;
	
}());
