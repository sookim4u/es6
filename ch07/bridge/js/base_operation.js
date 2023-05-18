CALC.createNameSpace("CALC.bridge.BaseOperation");

CALC.bridge.BaseOperation = (function() {
	
	let IBaseOperationImplementor = CALC.bridge.IBaseOperationImplementor;
	
	class BaseOperation extends IBaseOperationImplementor {
		
		constructor() {
			super();
		}
	
		add(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		substract(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		multiply(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		divide(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
		toString() {
			return "BaseOperation";
		}
		
	}
	
	return BaseOperation;
	
}());
