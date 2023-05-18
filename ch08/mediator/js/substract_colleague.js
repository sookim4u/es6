CALC.createNameSpace("CALC.mediator.SubstractColleague");

CALC.mediator.SubstractColleague = (function() {
	
	let IColleague = CALC.mediator.IColleague;
	
	class SubstractColleague extends IColleague {
		
		constructor() {
			super();
		}
	
		getAnswer() {
			return this.getFirstNumber() - this.getSecondNumber()
		}
		
		getOperator() {
			return "-"
		}
		
		toString() {
			return "SubstractColleague";
		}
		
	}
	
	return SubstractColleague;
	
}());
