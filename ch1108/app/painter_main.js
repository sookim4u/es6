PAINTER.createNameSpace("PAINTER.app.PainterMain");

PAINTER.app.PainterMain = (function() {
	
	class PainterMain {
		
		constructor(painterDivId) {
			let painter = document.getElementById(painterDivId);
			
			let toolbar = document.createElement("div");
			toolbar.setAttribute("id","toolbar");
			
			let mycanvas = document.createElement("canvas");
			mycanvas.setAttribute("id","mycanvas");
			
			painter.appendChild(toolbar);
			painter.appendChild(mycanvas);
			
			let painterView = new PAINTER.view.PainterView();
			painterView.repaint();
			
			let toolButtonPanel = new PAINTER.view.panel.ToolButtonPanel(painterView);
			toolButtonPanel.initLayout();
		}
		
		toString() {
			return "PainterMain";
		}
		
	}
	
	return PainterMain;
	
}());
