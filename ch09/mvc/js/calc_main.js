CALC.createNameSpace("CALC.mvc.CalcMain");

CALC.mvc.CalcMain = (function() {
	
	class CalcMain {
		
		constructor(calculatorDivId) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new CALC.mvc.CalcView(canvas);
			
			let calcModel = new CALC.mvc.CalcModel();

			calcView.setCalcModel(calcModel);
			
			let calcController = new CALC.mvc.CalcController();
			
			calcController.setCalcModel(calcModel);
			calcController.setCalcView(calcView);
			
			calcView.setCalcController(calcController);
			
			calcView.redraw();
		}
		
	}
	
	return CalcMain;
	
}());
