GAME.createNameSpace("GAME.controller.scene.ImplGameScene");

GAME.controller.scene.ImplGameScene = (function() {
	
	let IGameScene = GAME.controller.scene.IGameScene;
	
	class ImplGameScene extends IGameScene {
		
		constructor() {
			super();
		}
		
		setup(context) {
			
		}
	
		getSprites() {		
			return null;
		}
	
		update(context, frameIndex) {
			let sprites = this.getSprites();
			
			for(let sprite of sprites){
				sprite.update(frameIndex);					
			}	
		}
	
		finish() {
			
		}
		
		toString() {
			return "ImplGameScene";
		}

	}
	
	return ImplGameScene;
	
}());
