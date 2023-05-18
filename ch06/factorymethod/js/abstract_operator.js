CALC.createNameSpace("CALC.factorymethod.AbstractOperator");

CALC.factorymethod.AbstractOperator = (function() {
	
	class AbstractOperator {
		
		constructor() {
			
		}
		
		getAnswer(firstNumber, secondNumber) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getDescription() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperator";
		}
		
	}
	
	return AbstractOperator;
	
}());
