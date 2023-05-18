CALC.createNameSpace("CALC.mvvm.CalcMain");

CALC.mvvm.CalcMain = (function() {
	
	class CalcMain {
		
		constructor(calculatorDivId) {
			let calculator = document.getElementById(calculatorDivId);
			
			let canvas = document.createElement("canvas");
			let div = document.createElement("div");
			
			div.appendChild(canvas);
			
			calculator.appendChild(div);
		
			let calcView = new CALC.mvvm.CalcView(canvas);
			
			let calcModel = new CALC.mvvm.CalcModel();
			
			let calcViewModel = new CALC.mvvm.CalcViewModel();
			
			let dataBinder = new CALC.mvvm.DataBinder();
			
			dataBinder.setCalcViewModel(calcViewModel);
			dataBinder.setCalcView(calcView);
			
			calcViewModel.setCalcModel(calcModel);
			calcViewModel.setDataBinder(dataBinder);
			
			let calcCommandReceiver = new CALC.mvvm.command.CalcCommandReceiver();
			calcCommandReceiver.setCalcViewModel(calcViewModel);
			
			calcView.setCalcCommandReceiver(calcCommandReceiver);
			
			dataBinder.dataBinding();
			
			calcView.redraw();
		}
		
	}
	
	return CalcMain;
	
}());
