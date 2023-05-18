CALC.createNameSpace("CALC.mvvm.command.IncreaseSecondNumberCalcCommand");

CALC.mvvm.command.IncreaseSecondNumberCalcCommand = (function() {
	
	let AbstractCalcCommand = CALC.mvvm.command.AbstractCalcCommand;
	
	class IncreaseSecondNumberCalcCommand extends AbstractCalcCommand {
		
		constructor(receiver) {
			super(receiver);
		}
		
		execute() {
			this.receiver.increaseSecondNumber();
		}
	}

	return IncreaseSecondNumberCalcCommand;

}());
