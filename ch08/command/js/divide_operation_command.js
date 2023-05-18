CALC.createNameSpace("CALC.command.DivideOperationCommand");

CALC.command.DivideOperationCommand = (function() {
	
	let AbstractOperationCommand = CALC.command.AbstractOperationCommand;
	
	class DivideOperationCommand extends AbstractOperationCommand {
		
		constructor(receiver, value) {
			super(receiver, value);
		}
	
		execute() {
			this.receiver.divide(this.value);
		}
		
		toString() {
			return "DivideOperationCommand";
		}
		
	}
	
	return DivideOperationCommand;
	
}());
