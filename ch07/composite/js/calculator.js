CALC.createNameSpace("CALC.composite.Calculator");

CALC.composite.Calculator = (function() {
	
	class Calculator {
		
		constructor() {
			this.expression = null
		}
		
		calculate() {
			return this.expression.operate();
		}
		
		setExpression(expression) {
			this.expression = expression;
		}
		
		toString() {
			return "Calculator";
		}
		
	}
	
	return Calculator;
	
}());
