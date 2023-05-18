CALC.createNameSpace("CALC.ocp.before.MultiplyOperation");

CALC.ocp.before.MultiplyOperation = (function() {

	class MultiplyOperation {
		
		constructor() {
			
		}
	
		operate(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		toString() {
			return "MultiplyOperation";
		}
		
	}
	
	return MultiplyOperation;
	
}());
