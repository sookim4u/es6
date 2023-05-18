CALC.createNameSpace("CALC.mediator.MultiplyColleague");

CALC.mediator.MultiplyColleague = (function() {
	
	let IColleague = CALC.mediator.IColleague;
	
	class MultiplyColleague extends IColleague {
		
		constructor() {
			super();
		}
	
		getAnswer() {
			return this.getFirstNumber() * this.getSecondNumber()
		}
		
		getOperator() {
			return "*"
		}
		
		toString() {
			return "MultiplyColleague";
		}
		
	}
	
	return MultiplyColleague;
	
}());
