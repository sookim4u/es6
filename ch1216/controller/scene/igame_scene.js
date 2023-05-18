GAME.createNameSpace("GAME.controller.scene.IGameScene");

GAME.controller.scene.IGameScene = (function() {
	
	class IGameScene {
		
		constructor() {
			
		}

		finish() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		setup(context) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		getSprites() {
			throw new Error("You have to implement the method doSomething!");
		}

		update(context, frameIndex) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		move(context, mouseX, mouseY) {
			throw new Error("You have to implement the method doSomething!");
		}

		press(context, mouseX, mouseY) {
			throw new Error("You have to implement the method doSomething!");
		}

		release(context, mouseX, mouseY) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		keyPressed(context, e) {
			throw new Error("You have to implement the method doSomething!");
		}
		
	}
	
	return IGameScene;
	
}());
