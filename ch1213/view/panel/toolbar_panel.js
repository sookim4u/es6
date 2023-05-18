GAME.createNameSpace("GAME.view.panel.ToolbarPanel");

GAME.view.panel.ToolbarPanel = (function() {
	
	class ToolbarPanel {
		
		constructor(gameController) {
			this.gameController = gameController;
		}
		
		initLayout(toolbar) {
			let startButton = this.createButton("Start");
			toolbar.appendChild(startButton);
			
			let stopButton = this.createButton("Stop");
			toolbar.appendChild(stopButton);
			
			let selfController = this.gameController;
			
			startButton.addEventListener("click", function(e) {
				selfController.start();
			}, false);
			
			stopButton.addEventListener("click", function(e) {
				selfController.stop();
			}, false);
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
