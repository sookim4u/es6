CALC.createNameSpace("CALC.iterator.AbstractOperation");

CALC.iterator.AbstractOperation = (function() {
	
	class AbstractOperation {
		
		constructor() {
			
		}
		
		getAnswer(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		print(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperation";
		}
		
	}
	
	return AbstractOperation;
	
}());
