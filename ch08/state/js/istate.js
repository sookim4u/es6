CALC.createNameSpace("CALC.state.IState");

CALC.state.IState = (function() {
	
	class IState {
		
		constructor() {
			
		}
		
		action(context, actionCommand) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IState";
		}
		
	}
	
	return IState;
	
}());
