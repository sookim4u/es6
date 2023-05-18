CALC.createNameSpace("CALC.command.OperationCommandReceiver");

CALC.command.OperationCommandReceiver = (function() {
	
	class OperationCommandReceiver {
		
		constructor() {
			this.result = 0;
		}
		
		getResult() {
			return this.result;
		}
		
		add(value) {
			this.result += value;
		}
		
		substract(value) {
			this.result -= value;
		}
		
		multiply(value) {
			this.result *= value;
		}
		
		divide(value) {
			this.result /= value;
		}
		
		toString() {
			return "OperationCommandReceiver";
		}
		
	}
	
	return OperationCommandReceiver;
	
}());
