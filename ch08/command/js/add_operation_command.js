CALC.createNameSpace("CALC.command.AddOperationCommand");

CALC.command.AddOperationCommand = (function() {
	
	let AbstractOperationCommand = CALC.command.AbstractOperationCommand;
	
	class AddOperationCommand extends AbstractOperationCommand {
		
		constructor(receiver, value) {
			super(receiver, value);
		}
	
		execute() {
			this.receiver.add(this.value);
		}
		
		toString() {
			return "AddOperationCommand";
		}
		
	}
	
	return AddOperationCommand;
	
}());
