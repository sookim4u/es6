CALC.createNameSpace("CALC.mediator.IColleague");

CALC.mediator.IColleague = (function() {
	
	class IColleague {
		
		constructor() {
			this.mediator = null;
	
			this.firstNumber = 100;
			this.secondNumber = 10;
		}
		
		getAnswer() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getOperator() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		printResult() {
			let answer = this.getAnswer();
			console.log(this.firstNumber + this.getOperator() + this.secondNumber + " = " + answer);
		}
		
		changeFirstNumber(firstNumber) {
			this.setFirstNumber(firstNumber);
			
			this.mediator.colleagueChanged(this);
		}
		
		changeSecondNumber(secondNumber) {
			this.setSecondNumber(secondNumber);
			
			this.mediator.colleagueChanged(this);
		}
		
		getFirstNumber() {
			return this.firstNumber;
		}
		
		getSecondNumber() {
			return this.secondNumber;
		}
		
		setFirstNumber(firstNumber) {
			this.firstNumber = firstNumber;
		}
		
		setMediator(mediator) {
			this.mediator = mediator;
		}
		
		setSecondNumber(secondNumber) {
			this.secondNumber = secondNumber;
		}
		
		toString() {
			return "IColleague";
		}
		
	}
	
	return IColleague;
	
}());
