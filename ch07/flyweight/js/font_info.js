CALC.createNameSpace("CALC.flyweight.FontInfo");

CALC.flyweight.FontInfo = (function() {
	
	class FontInfo {
		
		constructor(name, size) {
			this.name = name;
			this.size = size;
		}
		
		getName() {
			return this.name;
		}
		
		setName(name) {
			this.name = name;
		}
		
		getSize() {
			return this.size;
		}
		
		setSize(size) {
			this.size = size;
		}
		
		toString() {
				return "(" + this.name + "," + this.size + ")"
		}
		
	}
	
	return FontInfo;
	
}());
