CALC.createNameSpace("CALC.proxy.AddOperationSubject");

CALC.proxy.AddOperationSubject = (function() {
	
	var AbstractOperationSubject = CALC.proxy.AbstractOperationSubject;
	
	class AddOperationSubject extends AbstractOperationSubject {
		
		constructor() {
			super();
		}
		
		operate(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		toString() {
			return "AddOperationSubject";
		}
		
	}
	
	return AddOperationSubject;
	
}());
