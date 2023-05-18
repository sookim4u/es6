CALC.createNameSpace("CALC.command.CalcCommandReceiver");

CALC.command.CalcCommandReceiver = (function() {
	
	let IContext = CALC.state.IContext;
	
	class CalcCommandReceiver extends IContext{
		
		constructor() {
			super();
			
			this.displayView = null;
			this.equationView = null;
			
			this.stateView = null;
			
			this.model = null;
		}
		
		updateDisplayView() {
			this.displayView.redraw();
		}

		updateEquationView() {
			this.equationView.redraw();
		}
		
		updateStateView() {
			this.stateView.redraw();
		}
		
		updateView() {
			this.updateEquationView();
			this.updateDisplayView();
		}
			
		setEquationView(equationView) {
			this.equationView = equationView;
		}

		setDisplayView(displayView) {
			this.displayView = displayView;
		}
		
		actionOperator(actionCommand) {
			
			let state = this.model.getState();
			state.handleOperator(this, actionCommand);
		}
		
		actionEqual() {
			
			let state = this.model.getState();
			state.handleEqual(this);
		}
		
		actionNumber(actionCommand) {
			
			let state = this.model.getState();
			state.handleNumber(this, actionCommand);
		}
		
		setStateView(stateView) {
			this.stateView = stateView;
		}

		setModel(model) {
			this.model = model;
		}
		
		addHandler(handler) {
			this.model.addHandler(handler);
		}
		
		appendInputToDisplay(input) {
			let lastOperand = this.getLastOperand();
			
			if (lastOperand !== null) {
				if (lastOperand.isNumber()) {
					lastOperand.append(input);
				}
			}
		}
		
		getLastHandler() {
			return this.model.getLastHandler();
		}
		
		getLastOperand() {
			let lastHandler = this.getLastHandler();
			
			if (lastHandler !== null) {
				return lastHandler.getOperand();
			}
			
			return null;
		}
			
		getResultExceptLast() {
			return this.model.getResultExceptLast();
		}
		
		getResultText() {
			return this.model.getResultText();
		}
		
		initHandler() {
			this.model.initHandler();
		}
		
		replaceHandler(handler) {
			this.model.replaceHandler(handler);
		}
		
		setLastOperand(operand) {
			let lastHandler = this.getLastHandler();
			
			if (lastHandler !== null) {
				lastHandler.setOperand(operand);
			}
		}
		
		changeState(state) {
			this.model.setState(state);

			this.updateStateView();
		}
		
		toString() {
			return "CalcCommandReceiver";
		}
		
	}
	
	return CalcCommandReceiver;

}());
