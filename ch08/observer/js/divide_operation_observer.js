CALC.createNameSpace("CALC.observer.DivideOperationObserver");

CALC.observer.DivideOperationObserver = (function() {
	
	let AbstractOperationObserver = CALC.observer.AbstractOperationObserver;
	
	class DivideOperationObserver extends AbstractOperationObserver {
		
		constructor(operationSubject) {
			super(operationSubject);
		}
	
		update() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let answer = firstNumber / secondNumber;
	
			console.log(firstNumber + " / " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "DivideOperationObserver";
		}
		
	}
	
	return DivideOperationObserver;
	
}());
