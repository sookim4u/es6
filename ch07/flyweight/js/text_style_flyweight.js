CALC.createNameSpace("CALC.flyweight.TextStyleFlywieight");

CALC.flyweight.TextStyleFlywieight = (function() {
	
	class TextStyleFlywieight {
		
		constructor(fontInfo, color) {
			this.fontInfo = fontInfo;
			this.color = color;
		}
		
		getColor() {
			return this.color;
		}
		
		toString() {
				return "(" + this.fontInfo.toString() + "," + this.color + ")";
		}
		
	}
	
	return TextStyleFlywieight;
	
}());
