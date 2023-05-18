GRAPH.createNameSpace("GRAPH.struct.Point");

GRAPH.struct.Point = (function() {
	
	class Point {
		
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
		
		toString() {
			return "Point";
		}
		
	}
	
	return Point;
	
}());
