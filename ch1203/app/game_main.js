GAME.createNameSpace("GAME.app.GameMain");

GAME.app.GameMain = (function() {
	
	class GameMain {
		
		constructor(gameDivId) {
			let GameModel = GAME.model.GameModel;
			let GameView = GAME.view.GameView;
			let ToolbarPanel = GAME.view.panel.ToolbarPanel;
			
			let game = document.getElementById(gameDivId);
			
			let toolbar = document.createElement("div");
			let gameCanvas = document.createElement("canvas");
			
			game.appendChild(toolbar);
			game.appendChild(gameCanvas);
			
			let gameModel = new GameModel();
			
			let gameView = new GameView(gameCanvas, gameModel);
			
			let toolbarPanel = new ToolbarPanel();
			toolbarPanel.initLayout(toolbar);
			
			this.setup(gameModel);
			
			gameView.repaint();
		}
		
		setup(gameModel){
			let shapeSprite = new GAME.model.sprite.RectangleSprite();
			
			shapeSprite.setX(50);
			shapeSprite.setY(50);
			shapeSprite.setWidth(200);
			shapeSprite.setHeight(150);
			
			shapeSprite.setFillColor("red");
			
			gameModel.addSprite(shapeSprite);
		}
		
		toString() {
			return "GameMain";
		}
		
	}
	
	return GameMain;
	
}());
