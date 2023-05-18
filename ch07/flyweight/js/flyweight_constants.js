CALC.createNameSpace("CALC.flyweight.FlyweightConstants");

CALC.flyweight.FlyweightConstants = (function() {
	
	let FontInfo = CALC.flyweight.FontInfo;
	
	class FlyweightConstants {
		
		constructor() {
			
		}
		
		toString() {
			return "FlyweightConstants";
		}
		
	}
	
	FlyweightConstants.NUMBER_STYLE_NAME = "number";
	FlyweightConstants.ANSWER_STYLE_NAME = "answer";
	
	FlyweightConstants.COLUMN_WIDTH = 50;
	FlyweightConstants.ROW_HEIGHT = 50;
	
	FlyweightConstants.OPERATORS = [ "+", "-", "*", "/" ];
	FlyweightConstants.EQUAL_CHAR = "=";
	
	FlyweightConstants.DEFAULT_NUMBER_FONT_INFO = new FontInfo("Times",18);
	FlyweightConstants.DEFAULT_ANSWER_FONT_INFO = new FontInfo("Times",26);
	
	return FlyweightConstants;
	
}());
