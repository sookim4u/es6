GAME.createNameSpace("GAME.view.GameView");

GAME.view.GameView = (function() {
	
	class GameView {
		
		constructor(gameCanvas, gameController, gameModel) {
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
			
			this.gameController = gameController;
			
			this.model = gameModel;
			
			this.canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
			
			document.addEventListener("keydown", this.handleKeyEvent.bind(this), false);
		}
		
		repaint() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			
			let sprites = this.model.getSprites();
			
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
		
		handleMouseEvent(e) {
			let canvas = this.canvas;
			let self = this;
			
			let pressPoint = this.relativePosition(e, canvas);
			
			self.gameController.controlPress(pressPoint.x, pressPoint.y);
			
			let mousemoveEventListener = function(e) {
				let movePoint = self.relativePosition(e, self.canvas);
				
				self.gameController.controlMove(pressPoint.x, pressPoint.y);
			};
			
			document.addEventListener("mousemove", mousemoveEventListener, false);
			
			let mouseupEventListener = function(e) {
				let upPoint = self.relativePosition(e, canvas);
				
				self.gameController.controlRelease(pressPoint.x, pressPoint.y);
				
				document.removeEventListener("mousemove", mousemoveEventListener, false);
				
				document.removeEventListener("mouseup", mouseupEventListener, false);
			};
			
			document.addEventListener("mouseup", mouseupEventListener, false);
		}
		
		relativePosition(event, element) {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					y: Math.floor(event.clientY - rect.top ) }
		}
		
		handleKeyEvent(e) {
			this.gameController.controlKeyPressed(e);
		}
		
		toString() {
			return "GameView";
		}
		
	}
	
	return GameView;
	
}());
