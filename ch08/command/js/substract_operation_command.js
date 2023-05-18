CALC.createNameSpace("CALC.command.SubstractOperationCommand");

CALC.command.SubstractOperationCommand = (function() {
	
	let AbstractOperationCommand = CALC.command.AbstractOperationCommand;
	
	class SubstractOperationCommand extends AbstractOperationCommand {
		
		constructor(receiver, value) {
			super(receiver, value);
		}
	
		execute() {
			this.receiver.substract(this.value);
		}
		
		toString() {
			return "SubstractOperationCommand";
		}
		
	}
	
	return SubstractOperationCommand;
	
}());
