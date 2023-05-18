CALC.createNameSpace("CALC.proxy.MultiplyOperationSubject");

CALC.proxy.MultiplyOperationSubject = (function() {
	
	var AbstractOperationSubject = CALC.proxy.AbstractOperationSubject;
	
	class MultiplyOperationSubject extends AbstractOperationSubject {
		
		constructor() {
			super();
		}
	
		operate(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		toString() {
			return "MultiplyOperationSubject";
		}
		
	}
	
	return MultiplyOperationSubject;
	
}());
