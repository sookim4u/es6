CALC.createNameSpace("CALC.mvvm.DataBinder");

CALC.mvvm.DataBinder = (function() {
	
	class DataBinder {
		
		constructor() {
			this.calcViewModel = null;
			this.calcView = null;
		}
		
		setCalcViewModel(calcViewModel) {
			this.calcViewModel = calcViewModel;
		}
			
		setCalcView(calcView) {
			this.calcView = calcView;
		}
		
		dataBinding() {
			let firstNumber = this.calcViewModel.getFirstNumber();
			let secondNumber = this.calcViewModel.getSecondNumber();
			
			let addResult = this.calcViewModel.add();
			let substractResult = this.calcViewModel.substract();
			let multiplyResult = this.calcViewModel.multiply();
			let divideResult = this.calcViewModel.divide();
			
			this.calcView.setFirstNumber(firstNumber);
			this.calcView.setSecondNumber(secondNumber);
			
			this.calcView.setAddResult(addResult);
			this.calcView.setSubstractResult(substractResult);
			this.calcView.setMultiplyResult(multiplyResult);
			this.calcView.setDivideResult(divideResult);
		}
		
		dataChanged() {
			this.dataBinding();
			
			this.calcView.redraw();
		}
		
	}

	return DataBinder;

}());
