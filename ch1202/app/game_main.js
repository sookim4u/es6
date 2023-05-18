GAME.createNameSpace("GAME.app.GameMain");

GAME.app.GameMain = (function() {
	
	class GameMain {
		
		constructor(gameDivId) {
			let game = document.getElementById(gameDivId);
			
			let toolbar = document.createElement("div");
			let gameCanvas = document.createElement("canvas");
			
			game.appendChild(toolbar);
			game.appendChild(gameCanvas);
			
			let gameView = new GAME.view.GameView(gameCanvas);
			
			let toolbarPanel = new GAME.view.panel.ToolbarPanel();
			toolbarPanel.initLayout(toolbar);
			
			gameView.repaint();
		}
		
		toString() {
			return "GameMain";
		}
		
	}
	
	return GameMain;
	
}());
