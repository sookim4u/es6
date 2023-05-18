CALC.createNameSpace("CALC.command.CalcCommandReceiver");

CALC.command.CalcCommandReceiver = (function() {
	
	class CalcCommandReceiver {
		
		constructor() {
			this.displayView = null;
			this.equationView = null;
			
			this.model = null;
		}
		
		updateDisplayView() {
			this.displayView.redraw();
		}

		updateEquationView() {
			this.equationView.redraw();
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
			
			if (actionCommand === "+") {
				this.addHandler(new CALC.chain.AddOperationHandler(null));
			}
			else if (actionCommand === "-") {
				this.addHandler(new CALC.chain.SubstractOperationHandler(null));
			}
			else if (actionCommand === "*") {
				this.addHandler(new CALC.chain.MultiplyOperationHandler(null));
			}
			else if (actionCommand === "/") {
				this.addHandler(new CALC.chain.DivideOperationHandler(null));
			}
		}
		
		actionEqual() {
			
			let resultText = this.getResultText();
			
			let numberOperand = new CALC.operand.NumberOperand(null);
			numberOperand.append(resultText);
			
			let newOperandHandler = new CALC.chain.OperandHandler(numberOperand);
			
			this.initHandler();
			
			this.addHandler(newOperandHandler);
		}
		
		actionNumber(actionCommand) {
			
			let lastHandler = this.getLastHandler();
			
			if (lastHandler instanceof CALC.chain.AbstractOperationHandler) {
				let input = actionCommand;
				
				let numberOperand = new CALC.operand.NumberOperand(input);
				
				this.setLastOperand(numberOperand);
			}
			else {
				this.appendInputToDisplay(actionCommand);
			}
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
		
		toString() {
			return "CalcCommandReceiver";
		}
		
	}
	
	return CalcCommandReceiver;

}());
