CALC.createNameSpace("CALC.mvvm.command.IncreaseFirstNumberCalcCommand");

CALC.mvvm.command.IncreaseFirstNumberCalcCommand = (function() {
	
	let AbstractCalcCommand = CALC.mvvm.command.AbstractCalcCommand;
	
	class IncreaseFirstNumberCalcCommand extends AbstractCalcCommand {
		
		constructor(receiver) {
			super(receiver);
		}
		
		execute() {
			this.receiver.increaseFirstNumber();
		}
	}

	return IncreaseFirstNumberCalcCommand;

}());
