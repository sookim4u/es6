CALC.createNameSpace("CALC.lsp.before.Calculator");

CALC.lsp.before.Calculator = (function() {
	
	class Calculator {
		
		constructor() {
			
		}
		
		calculate(operation, firstNumber, secondNumber) {
			if(operation instanceof CALC.lsp.before.DivideOperation) {
				if(secondNumber === 0) {
					return -999;
				}
			}
			
			let answer = operation.operate(firstNumber, secondNumber);
			
			return answer;
		}
		
		toString() {
			return "Calculator";
		}
		
	}
	
	return Calculator;
	
}());
