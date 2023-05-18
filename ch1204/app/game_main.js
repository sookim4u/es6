GAME.createNameSpace("GAME.app.GameMain");

GAME.app.GameMain = (function() {
	
	class GameMain {
		
		constructor(gameDivId) {
			let GameModel = GAME.model.GameModel;
			let GameView = GAME.view.GameView;
			let ToolbarPanel = GAME.view.panel.ToolbarPanel;
			let GameController = GAME.controller.GameController;
			
			let game = document.getElementById(gameDivId);
			
			let toolbar = document.createElement("div");
			let gameCanvas = document.createElement("canvas");
			
			game.appendChild(toolbar);
			game.appendChild(gameCanvas);
			
			let gameModel = new GameModel();
			
			let gameController = new GameController(gameModel);
			
			let gameView = new GameView(gameCanvas, gameModel);
			
			gameController.setGameView(gameView);
			
			let toolbarPanel = new ToolbarPanel(gameController);
			
			toolbarPanel.initLayout(toolbar);
			
			this.setup(gameController);
			
			gameView.repaint();
		}
		
		setup(gameController){
			let shapeSprite = new GAME.model.sprite.RectangleSprite();
			
			shapeSprite.setX(50);
			shapeSprite.setY(50);
			shapeSprite.setWidth(200);
			shapeSprite.setHeight(150);
			
			shapeSprite.setFillColor("red");
			
			gameController.addSprite(shapeSprite);
		}
		
		toString() {
			return "GameMain";
		}
		
	}
	
	return GameMain;
	
}());
