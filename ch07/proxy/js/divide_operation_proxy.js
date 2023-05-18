CALC.createNameSpace("CALC.proxy.DivideOperationProxy");

CALC.proxy.DivideOperationProxy = (function() {
	
	var AbstractOperationSubject = CALC.proxy.AbstractOperationSubject;
	
	class DivideOperationProxy extends AbstractOperationSubject {
		
		constructor(realOperationSubject) {
			super();
			
			this.realOperationSubject = realOperationSubject;
		}
	
		operate(firstNumber, secondNumber) {
			if (secondNumber === 0) {
				throw new Error("NonZeroDivideException");
			}
	
			return this.realOperationSubject.operate(firstNumber, secondNumber);
		}
		
		toString() {
			return "DivideOperationProxy";
		}
		
	}
	
	return DivideOperationProxy;
	
}());
