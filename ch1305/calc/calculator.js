GRAPH.createNameSpace("GRAPH.calc.Calculator");

GRAPH.calc.Calculator = (function() {
	
	let SetValueToVariableVisitor = GRAPH.calc.visitor.SetValueToVariableVisitor;
	
	class Calculator {
		
		constructor() {
			this.expression = null;
			
			this.variableToValueMap = {};
		}
		
		calculate() {
			if (this.expression !== null) {
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
