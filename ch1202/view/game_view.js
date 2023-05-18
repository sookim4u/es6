GAME.createNameSpace("GAME.view.GameView");

GAME.view.GameView = (function() {
	
	class GameView {
		
		constructor(gameCanvas) {
			let GameConstants = GAME.app.GameConstants;
			
			this.canvas = gameCanvas;
			
			this.canvas.width = GameConstants.GAME_WIDTH;
			this.canvas.height = GameConstants.GAME_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
		
			this.ctx.lineWidth = 10;
			this.ctx.strokeStyle = "red";
			this.ctx.fillStyle = "blue";
		}
		
		repaint() {
			let x = 10;
			let y = 20;
			let w = 100;
			let h = 50;
			
			this.ctx.fillRect(x, y, w, h);
			
			this.ctx.strokeRect(x, y, w, h);
		}
		
		toString() {
			return "GameView";
		}
		
	}
	
	return GameView;
	
}());
