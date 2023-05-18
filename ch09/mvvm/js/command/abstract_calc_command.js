CALC.createNameSpace("CALC.mvvm.command.AbstractCalcCommand");

CALC.mvvm.command.AbstractCalcCommand = (function() {

	class AbstractCalcCommand {
		
		constructor(receiver) {
			this.receiver = receiver;
		}
		
		execute() {
			throw new Error("You have to implement the method doSomething!");
		}
		
	}

	return AbstractCalcCommand;

}());
