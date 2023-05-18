CALC.createNameSpace("CALC.bridge.IBaseOperationImplementor");

CALC.bridge.IBaseOperationImplementor = (function() {
	
	class IBaseOperationImplementor {
		
		constructor() {
			
		}
		
		add(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		substract(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		multiply(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		divide(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IBaseOperationImplementor";
		}
		
	}
	
	return IBaseOperationImplementor;
	
}());
