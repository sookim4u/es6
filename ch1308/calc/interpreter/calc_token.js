GRAPH.createNameSpace("GRAPH.calc.interpreter.CalcToken");

GRAPH.calc.interpreter.CalcToken = (function() {
	
	class CalcToken {
		
		constructor(type, token) {
			this.type = type;
			this.token = token;
		}
		
		getType() {
			return this.type;
		}
		
		getToken() {
			return this.token;
		}
		
		getTypeDescription(type) {
			if (type === CalcToken.FUNCTION) {
				return "FUNCTION";
			}
			if (type === CalcToken.NUMBER) {
				return "NUMBER";
			}
			if (type === CalcToken.DELIM) {
				return "DELIM";
			}
			if (type === CalcToken.VARIABLE) {
				return "VARIABLE";
			}
			
			return null;
		}
		
		toString() {
			return this.getTypeDescription(this.type) + " " + this.token;
		}
		
	}
	
	CalcToken.FUNCTION = Symbol("function");
	CalcToken.NUMBER = Symbol("number");
	CalcToken.DELIM = Symbol("delimiter");
	CalcToken.VARIABLE = Symbol("variable");
	
	return CalcToken;
	
}());
