GRAPH.createNameSpace("GRAPH.calc.Client");

GRAPH.calc.Client = (function() {
	
	class Client {
		
		constructor() {

		}

		main() {
			this.test1();
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

	}
	
	return Client;

}());
