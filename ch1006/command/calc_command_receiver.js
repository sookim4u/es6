CALC.createNameSpace("CALC.command.CalcCommandReceiver");

CALC.command.CalcCommandReceiver = (function() {
	
	class CalcCommandReceiver {
		
		constructor() {
			this.displayView = null;
			this.equationView = null;
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
			console.log("actionOperator actionCommand = " + actionCommand);
		}
	
		actionEqual() {
			console.log("actionEqual");
		}
	
		actionNumber(actionCommand) {
			console.log("actionNumber actionCommand = " + actionCommand);
		}
		
		toString() {
			return "CalcCommandReceiver";
		}
		
	}
	
	return CalcCommandReceiver;

}());
