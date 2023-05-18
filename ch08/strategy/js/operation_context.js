CALC.createNameSpace("CALC.strategy.OperationContext");

CALC.strategy.OperationContext = (function() {
	
	class OperationContext {
		
		constructor() {
			this.operationStrategy = null;
		}
		
		operate(firstNumber, secondNumber) {
			let answer = this.operationStrategy.getAnswer(firstNumber, secondNumber);
	
			let operator = this.operationStrategy.getOperator();
	
			let result = firstNumber + operator + secondNumber + "=" + answer;
	
			this.print(result);
		}
		
		setOperationStrategy(operationStrategy) {
			this.operationStrategy = operationStrategy;
		}
		
		print(result) {
			console.log(result);
		}
		
		toString() {
			return "OperationContext";
		}
		
	}
	
	return OperationContext;
	
}());
