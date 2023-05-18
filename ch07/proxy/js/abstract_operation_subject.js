CALC.createNameSpace("CALC.proxy.AbstractOperationSubject");

CALC.proxy.AbstractOperationSubject = (function() {
	
	class AbstractOperationSubject {
		
		constructor() {
			
		}
		
		operate(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperationSubject";
		}
	
	}
	
	return AbstractOperationSubject;
	
}());
