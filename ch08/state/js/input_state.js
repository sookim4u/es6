CALC.createNameSpace("CALC.state.InputState");

CALC.state.InputState = (function() {
	
	let IState = CALC.state.IState;
	
	class InputState extends IState {
		
		constructor() {
			super();
			
			if(InputState._instance) {
				return InputState._instance;
			}
			
			InputState._instance = this;
		}
		
		static getInstance() {
			if (!InputState._instance) {
				InputState._instance = new InputState();
			}
			
			return InputState._instance;
		}
		
		action(context, actionCommand) {
			let OperatorState = CALC.state.OperatorState;
			
			if (context.isOperator(actionCommand)) {
				context.calculate();
				context.setLastOperator(actionCommand);
	
				context.changeState(OperatorState.getInstance());
			}
			else {
				context.appendInputToDisplay(actionCommand);
			}
		}
		
		toString() {
			return "InputState";
		}
		
	}
	
	return InputState;
	
}());
