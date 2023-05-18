CALC.createNameSpace("CALC.interpreter.CalcContext");

CALC.interpreter.CalcContext = (function() {
	
	class CalcContext {
		
		constructor(text) {
			this.tokenizer = new CALC.interpreter.CalcTokenizer(text);
			this.currentToken = null;
		}
		
		getCurrentTokenAndGoToNext() {
			if (this.tokenizer.hasMoreElements()) {
				this.currentToken = this.tokenizer.getCurrentTokenAndGoToNext();
			} 
			else {
				this.currentToken = null;
			}
	
			return this.currentToken;
		}
		
		skipToken(token) {
			if (token !== this.currentToken.getToken()) {
				throw new Error("Warning: " + token + " is expected, but " + this.currentToken + " is found.");
			}
		}
		
		print() {
			this.tokenizer.print();
		}
		
		getCurrentToken() {
			return this.tokenizer.getCurrentToken();
		}
		
		toString() {
			return "CalcContext";
		}
	
	}
		
	return CalcContext;
	
}());
