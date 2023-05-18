GAME.createNameSpace("GAME.view.panel.ToolbarPanel");

GAME.view.panel.ToolbarPanel = (function() {
	
	class ToolbarPanel {
		
		constructor() {
			
		}
		
		initLayout(toolbar) {
			let startButton = this.createButton("Start");
			toolbar.appendChild(startButton);
			
			let stopButton = this.createButton("Stop");
			toolbar.appendChild(stopButton);
		}
		
		createButton(label) {
			let button = document.createElement("button");
			let text = document.createTextNode(label);
			
			button.appendChild(text);
			
			return button;
		}
		
		toString() {
			return "ToolbarPanel";
		}
		
	}
	
	return ToolbarPanel;
	
}());
