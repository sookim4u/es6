CALC.createNameSpace("CALC.observer.OperationSubject");

CALC.observer.OperationSubject = (function() {
	
	let ISubject = CALC.observer.ISubject;
	
	class OperationSubject extends ISubject {
		
		constructor() {
			super();
			
			this.firstNumber = 0;
			this.secondNumber = 0;
			
			this.observers = [];
		}
		
		registerObserver(oberver) {
			this.observers.push(oberver);
		}
		
		removeObserver(oberver) {
			let index = this.observers.indexOf(oberver);
			if (index >= 0) {
				this.observers.splice(index, 1);
			}
		}
		
		notifyObservers() {
			for (let observer of this.observers) {
				observer.update();
			}
		}
		
		getFirstNumber() {
			return this.firstNumber;
		}
		
		setNumber(firstNumber, secondNumber) {
			this.firstNumber = firstNumber;
			this.secondNumber = secondNumber;
	
			this.notifyObservers();
		}
		
		getSecondNumber() {
			return this.secondNumber;
		}
		
		toString() {
			return "OperationSubject";
		}
		
	}
	
	return OperationSubject;
	
}());
