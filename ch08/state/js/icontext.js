CALC.createNameSpace("CALC.state.IContext");

CALC.state.IContext = (function() {
	
	class IContext {
		
		constructor() {
			
		}
		
		changeState(state) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		updateDisplay(text) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		appendInputToDisplay(input) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		isOperator(actionCommand) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		calculate() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		setLastOperator(lastCommand) {
			throw new Error("You have to implement the method doSomething!");
		}
	
		toString() {
			return "IContext";
		}
		
	}
	
	return IContext;
	
}());
