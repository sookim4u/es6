CALC.createNameSpace("CALC.mvp.CalcPresenter");

CALC.mvp.CalcPresenter = (function() {
	
	class CalcPresenter {
		
		constructor() {
			this.calcModel = null;
			this.calcView = null;
		}

		setCalcModel(calcModel) {
			this.calcModel = calcModel;
		}

		setCalcView(calcView) {
			this.calcView = calcView;
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
			
			this.calcView.redraw();
		}

		decreaseSecondNumber() {
			this.calcModel.decreaseSecondNumber();
			
			this.calcView.redraw();
		}

		increaseFirstNumber() {
			this.calcModel.increaseFirstNumber();
			
			this.calcView.redraw();
		}

		increaseSecondNumber() {
			this.calcModel.increaseSecondNumber();
			
			this.calcView.redraw();
		}

		getFirstNumber() {
			return this.calcModel.getFirstNumber();
		}

		getSecondNumber() {
			return this.calcModel.getSecondNumber();
		}
		
	}
	
	return CalcPresenter;

}());
