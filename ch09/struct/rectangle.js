CALC.createNameSpace("CALC.struct.Rectangle");

CALC.struct.Rectangle = (function() {
	
	class Rectangle {
		
		constructor(x, y, width, height) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
			
		contains(x, y) {
			if ((x >= this.x && x <= this.x + this.width) && (y >= this.y && y <= this.y + this.height)) {
				return true;
			}
		
			return false;
		}
		
	}

	return Rectangle;
	
}());
