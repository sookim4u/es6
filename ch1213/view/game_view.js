GAME.createNameSpace("GAME.view.GameView");

GAME.view.GameView = (function() {
	
	class GameView {
		
		constructor(gameCanvas, gameModel) {
			let GameConstants = GAME.app.GameConstants;
			
			this.canvas = gameCanvas;
			
			this.canvas.width = GameConstants.GAME_WIDTH;
			this.canvas.height = GameConstants.GAME_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
		
			this.ctx.lineWidth = 1;
			this.ctx.strokeStyle = "red";
			this.ctx.fillStyle = "blue";
			
			this.gameModel = gameModel;
		}
		
		repaint() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			
			let sprites = this.gameModel.getSprites();
			
			for (let sprite of sprites) {
				sprite.draw(this.ctx);
			}
		}
		
		getWidth() {
			return this.canvas.width;
		}
		
		getHeight() {
			return this.canvas.height;
		}
		
		toString() {
			return "GameView";
		}
		
	}
	
	return GameView;
	
}());
