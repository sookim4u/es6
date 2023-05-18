CALC.createNameSpace("CALC.facade.CalculatorFacade");

CALC.facade.CalculatorFacade = (function() {
	
	let ExpressionParser = CALC.facade.ExpressionParser;
	let NumberOperand = CALC.facade.NumberOperand;
	let OperationFactory = CALC.factory.OperationFactory;
	
	class CalculatorFacade {
	
		constructor() {
			this.expression = null
		}
		
		calculate(expression) {
			let expressionParser = new ExpressionParser();
			expressionParser.parse(expression);
	
			let operatorToken = expressionParser.getOperatorToken();
	
			let firstNumberToken = expressionParser.getFirstNumberToken();
			let secondNumberToken = expressionParser.getSecondNumberToken();
	
			let firstNumberOperand = new NumberOperand(firstNumberToken);
			let secondNumberOperand = new NumberOperand(secondNumberToken);
	
			let firstNumber = firstNumberOperand.getNumber();
			let secondNumber = secondNumberOperand.getNumber();
	
			let operationFactory = new OperationFactory();
			let operationProduct = operationFactory.createOperationProduct(operatorToken);
	
			operationProduct.operate(firstNumber, secondNumber);
		}
		
		toString() {
			return "CalculatorFacade";
		}
		
	}
	
	return CalculatorFacade;
	
}());
