CALC.createNameSpace("CALC.mediator.AddColleague");

CALC.mediator.AddColleague = (function() {
	
	let IColleague = CALC.mediator.IColleague;
	
	class AddColleague extends IColleague {
		
		constructor() {
			super();
		}
	
		getAnswer() {
			return this.getFirstNumber() + this.getSecondNumber()
		}
		
		getOperator() {
			return "+"
		}
		
		toString() {
			return "AddColleague";
		}
		
	}
	
	return AddColleague;
	
}());
