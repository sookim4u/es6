CALC.createNameSpace("CALC.mediator.ClientMediator");

CALC.mediator.ClientMediator = (function() {
	
	class ClientMediator {
		
		constructor() {
			let AddColleague = CALC.mediator.AddColleague;
			let SubstractColleague = CALC.mediator.SubstractColleague;
			let MultiplyColleague = CALC.mediator.MultiplyColleague;
			let DivideColleague = CALC.mediator.DivideColleague;
			
			this.addColleague = new AddColleague();
			this.substractColleague = new SubstractColleague();
			this.multiplyColleague = new MultiplyColleague();
			this.divideColleague = new DivideColleague();
			
			this.createColleagues();
		}
		
		createColleagues() {
			this.addColleague.setMediator(this);
			this.substractColleague.setMediator(this);
			this.multiplyColleague.setMediator(this);
			this.divideColleague.setMediator(this);
		}
		
		colleagueChanged(colleague) {
			let firstNumber = colleague.getFirstNumber();
			let secondNumber = colleague.getSecondNumber();
			
			this.addColleague.setFirstNumber(firstNumber);
			this.addColleague.setSecondNumber(secondNumber);
			
			this.addColleague.printResult();
			
			this.substractColleague.setFirstNumber(firstNumber);
			this.substractColleague.setSecondNumber(secondNumber);
			
			this.substractColleague.printResult();
			
			this.multiplyColleague.setFirstNumber(firstNumber);
			this.multiplyColleague.setSecondNumber(secondNumber);
			
			this.multiplyColleague.printResult();
			
			this.divideColleague.setFirstNumber(firstNumber);
			this.divideColleague.setSecondNumber(secondNumber);
			
			this.divideColleague.printResult();
		}
		
		getAddColleague() {
			return this.addColleague;
		}
		
		getSubstractColleague() {
			return this.substractColleague;
		}
		
		getMultiplyColleague() {
			return this.multiplyColleague;
		}
		
		getDivideColleague() {
			return this.divideColleague;
		}
		
	}
			
	return ClientMediator;
	
}());
