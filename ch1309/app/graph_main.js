GRAPH.createNameSpace("GRAPH.app.GraphMain");

GRAPH.app.GraphMain = (function() {
	
	class GraphMain {
		
		constructor(graphDivId) {
			let graph = document.getElementById(graphDivId);
			
			let toolbar = document.createElement("div");
			let graphCanvas = document.createElement("canvas");
			
			graph.appendChild(toolbar);
			graph.appendChild(graphCanvas);
			
			let graphModel = new GRAPH.model.GraphModel();
			
			let graphView = new GRAPH.view.GraphView(graphCanvas);
			
			graphView.setModel(graphModel);
			
			let toolbarPanel = new GRAPH.view.panel.ToolbarPanel();		
			toolbarPanel.initLayout(toolbar);
			
			let graphController = new GRAPH.controller.GraphController();
			graphController.setGraphModel(graphModel);
			graphController.setGraphView(graphView);
			
			toolbarPanel.setGraphController(graphController);
			
			graphView.redraw();
		}
		
		toString() {
			return "GraphMain";
		}
		
	}
	
	return GraphMain;
	
}());
