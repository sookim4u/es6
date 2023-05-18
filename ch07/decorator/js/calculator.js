CALC.createNameSpace("CALC.decorator.Calculator");

CALC.decorator.Calculator = (function() {
	
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
