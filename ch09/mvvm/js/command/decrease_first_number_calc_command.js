CALC.createNameSpace("CALC.mvvm.command.DecreaseFirstNumberCalcCommand");

CALC.mvvm.command.DecreaseFirstNumberCalcCommand = (function() {
	
	let AbstractCalcCommand = CALC.mvvm.command.AbstractCalcCommand;
	
	class DecreaseFirstNumberCalcCommand extends AbstractCalcCommand {
		
		constructor(receiver) {
			super(receiver);
		}
		
		execute() {
			this.receiver.decreaseFirstNumber();
		}
		
	}

	return DecreaseFirstNumberCalcCommand;

}());
