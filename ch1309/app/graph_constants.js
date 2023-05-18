GRAPH.createNameSpace("GRAPH.app.GraphConstants");

GRAPH.app.GraphConstants = (function() {
	
	class GraphConstants {
		
		constructor() {
			
		}
		
		toString() {
			return "GraphConstants";
		}
		
	}
	
	GraphConstants.DEFAULT_FONT_SIZE = 12;
	GraphConstants.DEFAULT_FONT = GraphConstants.DEFAULT_FONT_SIZE + "px Arial";

	GraphConstants.VIEW_WIDTH = 600;
	GraphConstants.VIEW_HEIGHT = 400;

	GraphConstants.AXIS_MARGIN = 20;

	GraphConstants.TICK_WIDTH = 10;

	GraphConstants.TICK_MARGIN = 5;

	GraphConstants.AXIS_COLOR = "black";
	GraphConstants.GRAPH_COLOR = "red";
	GraphConstants.GRID_COLOR = "gray";
	GraphConstants.VIEW_BORDER_COLOR = "blue";

	GraphConstants.AXIS_ARROW_HEAD_SIZE = 10;
	
	GraphConstants.INFINITE_NUMBER = Symbol("infinite");
	
	return GraphConstants;
	
}());
