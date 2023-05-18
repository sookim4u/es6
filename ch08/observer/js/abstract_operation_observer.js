CALC.createNameSpace("CALC.observer.AbstractOperationObserver");

CALC.observer.AbstractOperationObserver = (function() {
	
	class AbstractOperationObserver {
		
		constructor(operationSubject) {
			this.operationSubject = operationSubject;
		}
		
		update() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getFirstNumber() {
			return this.operationSubject.getFirstNumber();
		}
		
		getSecondNumber() {
			return this.operationSubject.getSecondNumber();
		}
		
		toString() {
			return "AbstractOperationObserver";
		}
	
	}
		
	return AbstractOperationObserver;
	
}());
