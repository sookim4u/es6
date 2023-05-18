CALC.createNameSpace("CALC.mediator.IMediator");

CALC.mediator.IMediator = (function() {
	
	class IMediator {
		
		constructor() {
			
		}
		
		createColleagues() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		colleagueChanged(colleague) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IMediator";
		}
		
	}
	
	return IMediator;
	
}());
