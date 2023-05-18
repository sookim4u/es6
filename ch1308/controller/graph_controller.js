GRAPH.createNameSpace("GRAPH.controller.GraphController");

GRAPH.controller.GraphController = (function() {
	
	class GraphController {
		
		constructor() {
			this.model = null;
			this.view = null;
		}

		setGraphModel(graphModel) {
			this.model = graphModel;
		}
	
		setGraphView(graphView) {
			this.view = graphView;
		}
	
		makePlotPoints(equation) {
			this.model.makePlotPoints(equation);
		}
	
		setMinXValue(minXValue) {
			this.model.setMinXValue(minXValue);
		}
	
		setMinYValue(minYValue) {
			this.model.setMinYValue(minYValue);
		}
	
		setMaxXValue(maxXValue) {
			this.model.setMaxXValue(maxXValue);
		}
	
		setMaxYValue(maxYValue) {
			this.model.setMaxYValue(maxYValue);
		}
	
		setTickXValue(tickXValue) {
			this.model.setTickXValue(tickXValue);
		}
	
		setTickYValue(tickYValue) {
			this.model.setTickYValue(tickYValue);
		}
	
		redraw() {
			this.view.redraw();
		}
		
		toString() {
			return "GraphController";
		}
		
	}
	
	return GraphController;
	
}());
