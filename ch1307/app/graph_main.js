GRAPH.createNameSpace("GRAPH.app.GraphMain");

GRAPH.app.GraphMain = (function() {
	
	class GraphMain {
		
		constructor(graphDivId) {
			let graph = document.getElementById(graphDivId);
			
			let toolbar = document.createElement("div");
			let graphCanvas = document.createElement("canvas");
			
			graph.appendChild(toolbar);
			graph.appendChild(graphCanvas);
			
			let graphView = new GRAPH.view.GraphView(graphCanvas);
			
			let toolbarPanel = new GRAPH.view.panel.ToolbarPanel();		
			toolbarPanel.initLayout(toolbar);
			
			toolbarPanel.setGraphView(graphView);
			
			graphView.redraw();
		}
		
		toString() {
			return "GraphMain";
		}
		
	}
	
	return GraphMain;
	
}());
