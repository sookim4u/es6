CALC.createNameSpace("CALC.observer.SubstractOperationObserver");

CALC.observer.SubstractOperationObserver = (function() {
	
	let AbstractOperationObserver = CALC.observer.AbstractOperationObserver;
	
	class SubstractOperationObserver extends AbstractOperationObserver {
		
		constructor(operationSubject) {
			super(operationSubject);
		}
	
		update() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let answer = firstNumber - secondNumber;
	
			console.log(firstNumber + " - " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "SubstractOperationObserver";
		}
		
	}
	
	return SubstractOperationObserver;
	
}());
