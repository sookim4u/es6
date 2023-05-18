GRAPH.createNameSpace("GRAPH.struct.GraphPoint");

GRAPH.struct.GraphPoint = (function() {
	
	class GraphPoint {
		
		constructor(x, y, isMoveTo) {
			this.x = x;
			this.y = y;
			
			this.isMoveTo = isMoveTo;
		}
		
		toString() {
			return "GraphPoint";
		}
		
	}
	
	return GraphPoint;
	
}());
