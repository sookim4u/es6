CALC.createNameSpace("CALC.command.MultiplyOperationCommand");

CALC.command.MultiplyOperationCommand = (function() {
	
	let AbstractOperationCommand = CALC.command.AbstractOperationCommand;
	
	class MultiplyOperationCommand extends AbstractOperationCommand {
		
		constructor(receiver, value) {
			super(receiver, value);
		}
	
		execute() {
			this.receiver.multiply(this.value);
		}
		
		toString() {
			return "MultiplyOperationCommand";
		}
		
	}
	
	return MultiplyOperationCommand;
	
}());
