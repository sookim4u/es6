CALC.createNameSpace("CALC.proxy.SubstractOperationSubject");

CALC.proxy.SubstractOperationSubject = (function() {
	
	var AbstractOperationSubject = CALC.proxy.AbstractOperationSubject;
	
	class SubstractOperationSubject extends AbstractOperationSubject {
		
		constructor() {
			super();
		}
	
		operate(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		toString() {
			return "SubstractOperationSubject";
		}
	
	}
		
	return SubstractOperationSubject;
	
}());
