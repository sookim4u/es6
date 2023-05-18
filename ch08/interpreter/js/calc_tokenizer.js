CALC.createNameSpace("CALC.interpreter.CalcTokenizer");

CALC.interpreter.CalcTokenizer = (function() {

	let CalcToken = CALC.interpreter.CalcToken;
	
	class CalcTokenizer {
		
		constructor(text) {
			
			this.keywords = [ "SQRT", "FRAC", "POW", "ADD", "SUB", "MUL", "DIV" ];
	
			this.tokenList = [];
	
			this.currentIndex = 0;
			
			let sb = "";
	
			let ch;
			for (let i = 0; i < text.length; i++) {
				ch = text.charAt(i);
	
				if (this.isDelim(ch)) {
					if (/\s/.test(ch) === false) {
						this.tokenList.push(new CalcToken(CalcToken.DELIM, "" + ch));
					}
				} 
				else if (this.isLetter(ch)) {
					sb = "";
					sb += ch;
					for (let k = i + 1; k < text.length; k++) {
						ch = text.charAt(k);
						if (this.isDelim(ch)) {
							i = k - 1;
							break;
						}
						sb += ch;
	
						i = k;
					}
	
					let variable = sb;
					if (this.isFunction(variable)) {
						this.tokenList.push(new CalcToken(CalcToken.FUNCTION, variable));
					} 
					else {
						this.tokenList.push(new CalcToken(CalcToken.VARIABLE, variable));
					}
				} 
				else if (this.isDigit(ch)) {
					sb = "";
					sb += ch;
					for (let k = i + 1; k < text.length; k++) {
						ch = text.charAt(k);
						if (this.isDelim(ch)) {
							i = k - 1;
							break;
						}
						sb += ch;
	
						i = k;
					}
	
					this.tokenList.push(new CalcToken(CalcToken.NUMBER, sb.toString()));
				}
			}
		}
		
		hasMoreElements() {
			return this.currentIndex < this.tokenList.length;
		}
		
		getCurrentTokenAndGoToNext() {
			return this.tokenList[this.currentIndex++];
		}
		
		isFunction(variable) {
			for (let keyword of this.keywords) {
				if (variable === keyword) {
					return true;
				}
			}
	
			return false;
		}
		
		isDelim(c) {
			if (("(),".indexOf(c) != -1))
				return true;
			return false;
		}
		
		isLetter(str) {
			return str.length === 1 && str.match(/[a-z]/i);
		}
		
		isDigit(str) {
			return /^\d+$/.test(str);
		}
		
		print() {
			for (let i = 0; i < this.tokenList.length; i++) {
				console.log(i + " " + this.tokenList[i]);
			}
		}
		
		getCurrentToken() {
			if (this.currentIndex < this.tokenList.length) {
				return this.tokenList[this.currentIndex];
			}
	
			return null;
		}
	
		toString() {
			return "CalcTokenizer";
		}
		
	}
	
	return CalcTokenizer;
	
}());
