CALC.createNameSpace("CALC.ocp.after.AbstractOperation");

CALC.ocp.after.AbstractOperation = (function() {
	
	class AbstractOperation {
		
		constructor() {
			
		}
		
		operate(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperation";
		}
		
	}
	
	return AbstractOperation;
	
}());
