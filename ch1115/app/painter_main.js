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
			
			this.painterModel = new PAINTER.model.PainterModel();
			
			this.painterView = new PAINTER.view.PainterView();
			
			this.painterController = new PAINTER.controller.PainterController();
			
			this.toolButtonPanel = new PAINTER.view.panel.ToolButtonPanel();
			
			this.setup();
			
			this.toolButtonPanel.initLayout();
		}
		
		setup() {
			this.painterController.setPainterModel(this.painterModel);
			this.painterController.setPainterView(this.painterView);
			
			this.painterView.setPainterModel(this.painterModel);
			this.painterView.setPainterController(this.painterController);
			
			this.toolButtonPanel.setPainterController(this.painterController);
		}
		
		toString() {
			return "PainterMain";
		}
		
	}
	
	return PainterMain;
	
}());
