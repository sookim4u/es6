GAME.createNameSpace("GAME.controller.scene.IGameContext");

GAME.controller.scene.IGameContext = (function() {
	
	class IGameContext {
		
		constructor() {
			
		}
		
		changeScene(scene) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		repaintView() {
			throw new Error("You have to implement the method doSomething!");
		}

		getScreenWidth() {
			throw new Error("You have to implement the method doSomething!");
		}

		getScreenHeight() {
			throw new Error("You have to implement the method doSomething!");
		}

		getCurrentFrameIndex() {
			throw new Error("You have to implement the method doSomething!");
		}

		getFrameDuration() {
			throw new Error("You have to implement the method doSomething!");
		}
		
	}
	
	return IGameContext;
	
}());
