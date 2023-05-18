CALC.createNameSpace("CALC.mvvm.command.CalcCommandReceiver");

CALC.mvvm.command.CalcCommandReceiver = (function() {
	
	class CalcCommandReceiver {
		
		constructor() {
			this.calcViewModel = null;
		}

		setCalcViewModel(calcViewModel) {
			this.calcViewModel = calcViewModel;
		}

		increaseFirstNumber() {
			this.calcViewModel.increaseFirstNumber();
		}

		decreaseFirstNumber() {
			this.calcViewModel.decreaseFirstNumber();
		}

		increaseSecondNumber() {
			this.calcViewModel.increaseSecondNumber();
		}

		decreaseSecondNumber() {
			this.calcViewModel.decreaseSecondNumber();
		}
		
	}

	return CalcCommandReceiver;

}());
