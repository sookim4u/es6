CALC.createNameSpace("CALC.mvvm.command.DecreaseSecondNumberCalcCommand");

CALC.mvvm.command.DecreaseSecondNumberCalcCommand = (function() {
	
	let AbstractCalcCommand = CALC.mvvm.command.AbstractCalcCommand;
	
	class DecreaseSecondNumberCalcCommand extends AbstractCalcCommand {
		
		constructor(receiver) {
			super(receiver);
		}
		
		execute() {
			this.receiver.decreaseSecondNumber();
		}
	}

	return DecreaseSecondNumberCalcCommand;

}());
