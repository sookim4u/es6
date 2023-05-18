GRAPH.createNameSpace("GRAPH.calc.Client");

GRAPH.calc.Client = (function() {
	
	class Client {
		
		constructor() {

		}

		main() {
			this.test3();
		}

		test1() {
			let interpreter = GRAPH.calc.interpreter;
			
			let text = "ADD(2,10)";
			
			let calcContext = new interpreter.CalcContext(text);
		
			try {
				let result = 0;
				
				let currentToken = calcContext.getCurrentTokenAndGoToNext();
				
				let expression = interpreter.expression.CalcExpressionFactory.createExpression(currentToken);
				if (expression !== null) {
					expression.parse(calcContext);
		
					result = expression.operate();
				}
		
				console.log(text + " = " + result);
			} catch (e) {
				console.log(e);
			}
		}
		
		test2() {
			let interpreter = GRAPH.calc.interpreter;
			
			let text = "POW(10,3)";
			
			let calcContext = new interpreter.CalcContext(text);
		
			try {
				let result = 0;
				
				let currentToken = calcContext.getCurrentTokenAndGoToNext();
				
				let expression = interpreter.expression.CalcExpressionFactory.createExpression(currentToken);
				if (expression !== null) {
					expression.parse(calcContext);
		
					result = expression.operate();
				}
		
				console.log(text + " = " + result);
			} catch (e) {
				console.log(e);
			}
		}
		
		test3() {
			let interpreter = GRAPH.calc.interpreter;
			
			let text = "ADD(x,10)";
			
			let calcContext = new interpreter.CalcContext(text);
		
			try {
				let variableName = "x";
				let value = 20;
				
				let result = 0;
				
				let currentToken = calcContext.getCurrentTokenAndGoToNext();
				
				let expression = interpreter.expression.CalcExpressionFactory.createExpression(currentToken);
				if (expression !== null) {
					expression.parse(calcContext);
		
					let calculator = new GRAPH.calc.Calculator();
					calculator.setExpression(expression);

					calculator.addVariableToValue(variableName, value);

					result = calculator.calculate();
				}
		
				console.log(variableName + " = " + value);
				console.log(text + " = " + result);
			} catch (e) {
				console.log(e);
			}
		}
		
	}
	
	return Client;

}());
