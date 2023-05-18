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
			this.loadResource();
			
			let shapeSprite = new GAME.model.sprite.RectangleSprite();
			
			shapeSprite.setAnchorX(0);
			shapeSprite.setAnchorY(0);
			
			shapeSprite.setX(50);
			shapeSprite.setY(50);
			shapeSprite.setWidth(200);
			shapeSprite.setHeight(150);
			
			shapeSprite.setFillColor("red");
			
			gameController.addSprite(shapeSprite);
			
			shapeSprite = new GAME.model.sprite.EllipseSprite();
			
			shapeSprite.setAnchorX(0);
			shapeSprite.setAnchorY(0);
			
			shapeSprite.setX(300);
			shapeSprite.setY(50);
			shapeSprite.setWidth(200);
			shapeSprite.setHeight(150);
			
			shapeSprite.setFillColor("blue");
			
			gameController.addSprite(shapeSprite);
			
			let GameConstants = GAME.app.GameConstants;
			
			shapeSprite = new GAME.model.sprite.ImageSprite(GameConstants.PLAYER_SPRITE_IMAGE_NAME, GameConstants.PLAYER_SPRITE_IMAGE_COUNT);
			
			shapeSprite.setAnchorX(0);
			shapeSprite.setAnchorY(0);
			
			shapeSprite.setX(50);
			shapeSprite.setY(250);
			
			gameController.addSprite(shapeSprite);
		}
		
		loadResource(){
			let ImageRepository = GAME.controller.repository.ImageRepository;
			
			let imageRepository = ImageRepository.getInstance();
			
			let GameConstants = GAME.app.GameConstants;
			
			let imageInfo = {name:GameConstants.PLAYER_SPRITE_IMAGE_NAME, 
					count:GameConstants.PLAYER_SPRITE_IMAGE_COUNT}
			
			imageRepository.queueImageInfo(imageInfo);
			
			let loadingPercentComplete = 0;
			
			let imageLoaderTimer = window.setInterval(function loadImages() {
				loadingPercentComplete = imageRepository.loadImages();
				
				if(loadingPercentComplete === 100) {
					window.clearInterval(imageLoaderTimer);
				}
				
			}, GameConstants.INTERVAL_TIME);
			
		}
		
		toString() {
			return "GameMain";
		}		
		
	}
	
	return GameMain;
	
}());
