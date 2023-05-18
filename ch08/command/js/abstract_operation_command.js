CALC.createNameSpace("CALC.command.AbstractOperationCommand");

CALC.command.AbstractOperationCommand = (function() {
	
	class AbstractOperationCommand {
		
		constructor(receiver, value) {
			this.receiver = receiver;
			this.value = value;
		}
		
		execute() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractOperationCommand";
		}
		
	}
	
	return AbstractOperationCommand;
	
}());
