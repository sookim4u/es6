CALC.createNameSpace("CALC.mediator.DivideColleague");

CALC.mediator.DivideColleague = (function() {
	
	let IColleague = CALC.mediator.IColleague;
	
	class DivideColleague extends IColleague {
		
		constructor() {
			super();
		}
	
		getAnswer() {
			return this.getFirstNumber() / this.getSecondNumber()
		}
		
		getOperator() {
			return "/"
		}
		
		toString() {
			return "DivideColleague";
		}
	
	}	
		
	return DivideColleague;
	
}());
