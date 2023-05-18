GAME.createNameSpace("GAME.controller.GameController");

GAME.controller.GameController = (function() {
	
	class GameController {
		
		constructor(model) {
			this.model = model;
			this.view = null;
			
			this.timer = null;
		}
		
		setGameView(gameView) {
			this.view = gameView;
		}

		addSprite(sprite) {
			this.model.addSprite(sprite);
		}

		start() {
			let GameConstants = GAME.app.GameConstants;
			
			let self = this;
			this.timer = window.setInterval(function() {
				self.model.updateSprites();
				
				self.model.runSprites();
				
				self.view.repaint();
				
				self.model.increaseFrameIndex();
				
			}, GameConstants.INTERVAL_TIME);
		}

		stop() {
			if(this.timer !== null) {
				window.clearInterval(this.timer);
			}
		}
		
		getCurrentFrameIndex() {			
			return this.model.getFrameIndex();
		}
		
		getFrameDuration() {			
			return this.model.getFrameDuration();
		}
		
		toString() {
			return "GameController";
		}
		
	}
	
	return GameController;
	
}());
