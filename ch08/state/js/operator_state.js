CALC.createNameSpace("CALC.state.OperatorState");

CALC.state.OperatorState = (function() {
	
	let IState = CALC.state.IState;
	
	class OperatorState extends IState {
		
		constructor() {
			super();
			
			if(OperatorState._instance) {
				return OperatorState._instance;
			}
			
			OperatorState._instance = this;
		}
		
		static getInstance() {
			if (!OperatorState._instance) {
				OperatorState._instance = new OperatorState();
			}
			
			return OperatorState._instance;
		}
		
		action(context, actionCommand) {
			let InputState = CALC.state.InputState;
			
			if (context.isOperator(actionCommand)) {
				context.setLastOperator(actionCommand);
			}    
			else {
				context.updateDisplay("");
				context.appendInputToDisplay(actionCommand);
	
				context.changeState(InputState.getInstance());
			}
		}
		
		toString() {
			return "OperatorState";
		}
		
	}
	
	return OperatorState;
	
}());
