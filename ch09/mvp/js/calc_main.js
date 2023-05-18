CALC.createNameSpace("CALC.mvp.CalcMain");

CALC.mvp.CalcMain = (function() {
	
	class CalcMain {
		
		constructor(calculatorDivId) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new CALC.mvp.CalcView(canvas);
			
			let calcModel = new CALC.mvp.CalcModel();
			
			let calcPresenter = new CALC.mvp.CalcPresenter();
			
			calcPresenter.setCalcModel(calcModel);
			calcPresenter.setCalcView(calcView);
			
			calcView.setCalcPresenter(calcPresenter);
			
			calcView.redraw();
		}
		
	}
	
	return CalcMain;
	
}());
