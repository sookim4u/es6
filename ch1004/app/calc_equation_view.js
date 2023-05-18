CALC.createNameSpace("CALC.app.CalcEquationView");

CALC.app.CalcEquationView = (function() {
	
	class CalcEquationView {
		
		constructor(equationCanvas) {
			let CalcConstants = CALC.app.CalcConstants;
			
			this.canvas = equationCanvas;
			
			this.canvas.width = CalcConstants.VIEW_WIDTH;
			this.canvas.height = CalcConstants.DEFAULT_VIEW_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
		}
		
		toString() {
			return "CalcEquationView";
		}
		
	}
	
	return CalcEquationView;
	
}());
