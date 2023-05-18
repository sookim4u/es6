CALC.createNameSpace("CALC.chain.Request");

CALC.chain.Request = (function() {
	
	class Request {
		
		constructor(expression) {
			this.expression = expression;
		}
		
		getExpression() {
			return this.expression;
		}
		
		getFirstNumber(operator) {
			let operatorIndex = this.expression.indexOf(operator);
			
			let firstNumber = this.expression.substring(0, operatorIndex);
			return parseInt(firstNumber, 10);
		}
		
		getSecondNumber(operator) {
			let operatorIndex = this.expression.indexOf(operator);
			
			let secondNumber = this.expression.substring(operatorIndex + 1);
			return parseInt(secondNumber, 10);
		}
		
		toString() {
			return "Request";
		}
	
	}	
		
	return Request;
	
}());
