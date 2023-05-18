CALC.createNameSpace("CALC.visitor.Calculator");

CALC.visitor.Calculator = (function() {
	
	let SetValueToVariableVisitor = CALC.visitor.SetValueToVariableVisitor;
	
	class Calculator {
		
		constructor() {
			this.expression = null;
			this.variableToValueMap = {}
		}
		
		calculate() {
			if (this.expression != null) {
				for(let variableName in this.variableToValueMap) {
					if(!this.variableToValueMap.hasOwnProperty(variableName)) {
						continue;
					}
					
					let value = this.variableToValueMap[variableName];
	
					let setValueToVariableVisitor = new SetValueToVariableVisitor(variableName, value);
	
					this.expression.accept(setValueToVariableVisitor);
				}
	
				return this.expression.operate();
			}
			
			return 0;
		}
		
		setExpression(expression) {
			this.expression = expression;
		}
		
		addVariableToValue(variableName, value) {
			this.variableToValueMap[variableName] = value;
		}
		
		toString() {
			return "Calculator";
		}
		
	}
	
	return Calculator;
	
}());
