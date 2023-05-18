GAME.createNameSpace("GAME.controller.GameController");

GAME.controller.GameController = (function() {
	
	let IGameContext = GAME.controller.scene.IGameContext;
	
	class GameController extends IGameContext {
	
		constructor(model) {
			super();
			
			this.model = model;
			this.view = null;
			
			this.timer = null;
		}
		
		setGameView(gameView) {
			this.view = gameView;
		}

		start() {
			let GameConstants = GAME.app.GameConstants;
			let MenuGameScene = GAME.controller.scene.MenuGameScene;
			
			this.changeScene(MenuGameScene.getInstance());
			
			let self = this;
			this.timer = window.setInterval(function() {
				self.model.updateScene(self);
				
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
		
		changeScene(scene) {
			this.model.changeScene(scene, this);
		}

		getScreenHeight() {
			return this.view.getHeight();
		}

		getScreenWidth() {
			return this.view.getWidth();
		}

		repaintView() {
			this.view.repaint();
		}
		
		controlMove(mouseX, mouseY) {

		}

		controlPress(mouseX, mouseY) {
			let scene = this.model.getScene();		
			scene.press(this, mouseX, mouseY);
		}

		controlRelease(mouseX, mouseY) {
			let scene = this.model.getScene();		
			scene.release(this, mouseX, mouseY);
		}
		
		controlKeyPressed(e) {
			let scene = this.model.getScene();		
			scene.keyPressed(this, e);		
		}
		
		toString() {
			return "GameController";
		}
		
	}
	
	return GameController;
	
}());
