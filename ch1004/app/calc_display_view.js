CALC.createNameSpace("CALC.app.CalcDisplayView");

CALC.app.CalcDisplayView = (function() {
	
	class CalcDisplayView {
		
		constructor(displayCanvas) {
			let CalcConstants = CALC.app.CalcConstants;
			
			this.canvas = displayCanvas;
			
			this.canvas.width = CalcConstants.VIEW_WIDTH;
			this.canvas.height = CalcConstants.DISPLAY_VIEW_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
		}
		
		toString() {
			return "CalcDisplayView";
		}
		
	}
	
	return CalcDisplayView;
	
}());
