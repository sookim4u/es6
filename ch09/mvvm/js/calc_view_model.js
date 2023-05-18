CALC.createNameSpace("CALC.mvvm.CalcViewModel");

CALC.mvvm.CalcViewModel = (function() {
	
	class CalcViewModel {
		
		constructor() {
			this.calcModel = null;
			this.dataBinder = null;
		}
		
		add() {
			let firstNumber = this.calcModel.getFirstNumber();
			let secondNumber = this.calcModel.getSecondNumber();
			
			return firstNumber + secondNumber;
		}

		divide() {
			let firstNumber = this.calcModel.getFirstNumber();
			let secondNumber = this.calcModel.getSecondNumber();
			
			return firstNumber / secondNumber;
		}

		multiply() {
			let firstNumber = this.calcModel.getFirstNumber();
			let secondNumber = this.calcModel.getSecondNumber();
			
			return firstNumber * secondNumber;
		}

		substract() {
			let firstNumber = this.calcModel.getFirstNumber();
			let secondNumber = this.calcModel.getSecondNumber();
			
			return firstNumber - secondNumber;
		}

		decreaseFirstNumber() {
			this.calcModel.decreaseFirstNumber();
			
			this.dataBinder.dataChanged();
		}

		decreaseSecondNumber() {
			this.calcModel.decreaseSecondNumber();
			
			this.dataBinder.dataChanged();
		}

		increaseFirstNumber() {
			this.calcModel.increaseFirstNumber();
			
			this.dataBinder.dataChanged();
		}

		increaseSecondNumber() {
			this.calcModel.increaseSecondNumber();
			
			this.dataBinder.dataChanged();
		}

		getFirstNumber() {
			return this.calcModel.getFirstNumber();
		}

		getSecondNumber() {
			return this.calcModel.getSecondNumber();
		}

		setCalcModel(calcModel) {
			this.calcModel = calcModel;
		}

		setDataBinder(dataBinder) {
			this.dataBinder = dataBinder;
		}
		
	}
	
	return CalcViewModel;

}());
