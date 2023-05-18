CALC.createNameSpace("CALC.proxy.DivideOperationSubject");

CALC.proxy.DivideOperationSubject = (function() {
	
	var AbstractOperationSubject = CALC.proxy.AbstractOperationSubject;
	
	class DivideOperationSubject extends AbstractOperationSubject {
		
		constructor() {
			super();
		}
	
		operate(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
		toString() {
			return "DivideOperationSubject";
		}
		
	}
	
	return DivideOperationSubject;
	
}());
