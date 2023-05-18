CALC.createNameSpace("CALC.state.StartState");

CALC.state.StartState = (function() {
	
	let IState = CALC.state.IState;
	
	class StartState extends IState {
		
		constructor() {
			super();
			
			if(StartState._instance) {
				return StartState._instance;
			}
			
			StartState._instance = this;
		}
		
		static getInstance() {
			if (!StartState._instance) {
				StartState._instance = new StartState();
			}
			
			return StartState._instance;
		}
		
		action(context, actionCommand) {
			let InputState = CALC.state.InputState;
			
			context.updateDisplay(actionCommand);
	
			context.changeState(InputState.getInstance());
		}
		
		toString() {
			return "StartState";
		}
		
	}
	
	return StartState;
	
}());
