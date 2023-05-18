CALC.createNameSpace("CALC.mv.CalcMain");

CALC.mv.CalcMain = (function() {
	
	class CalcMain {
		
		constructor(calculatorDivId) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new CALC.mv.CalcView(canvas);
			
			let calcModel = new CALC.mv.CalcModel();

			calcView.setCalcModel(calcModel);
			
			calcView.redraw();
		}
		
	}
	
	return CalcMain;
	
}());
