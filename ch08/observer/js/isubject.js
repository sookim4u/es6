CALC.createNameSpace("CALC.observer.ISubject");

CALC.observer.ISubject = (function() {
	
	class ISubject {
		
		constructor() {
			
		}
		
		notifyObservers() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		registerObserver(oberver) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		removeObserver(oberver) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "ISubject";
		}
		
	}
	
	return ISubject;
	
}());
