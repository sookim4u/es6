CALC.createNameSpace("CALC.observer.AddOperationObserver");

CALC.observer.AddOperationObserver = (function() {
	
	let AbstractOperationObserver = CALC.observer.AbstractOperationObserver;
	
	class AddOperationObserver extends AbstractOperationObserver {
		
		constructor(operationSubject) {
			super(operationSubject);
		}
	
		update() {
			let firstNumber = this.getFirstNumber();
			let secondNumber = this.getSecondNumber();
	
			let answer = firstNumber + secondNumber;
	
			console.log(firstNumber + " + " + secondNumber + " = " + answer);
		}
		
		toString() {
			return "AddOperationObserver";
		}
		
	}
	
	return AddOperationObserver;
	
}());
