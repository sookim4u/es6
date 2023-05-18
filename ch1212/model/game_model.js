GAME.createNameSpace("GAME.model.GameModel");

GAME.model.GameModel = (function() {
	
	class GameModel {
		
		constructor() {
			this.sprites = [];
			
			this.frameIndex = 0;
			
			this.framePerSecond = 10;
		}
		
		getSprites() {
			return this.sprites;
		}
		
		addSprite(sprite) {
			this.sprites.push(sprite);
		}
		
		getFrameDuration(){
			return 1.0 / this.framePerSecond;
		}

		getFrameIndex() {
			return this.frameIndex;
		}

		getFramePerSecond() {
			return this.framePerSecond;
		}

		increaseFrameIndex(){
			this.frameIndex++;
		}

		setFrameIndex(frameIndex) {
			this.frameIndex = frameIndex;
		}

		setFramePerSecond(framePerSecond) {
			this.framePerSecond = framePerSecond;
		}
		
		updateSprites() {
			let sprites = this.getSprites();
			
			for(let sprite of sprites){
				sprite.update(this.frameIndex);					
			}	
		}
		
		runSprites(){
			
			let sprites = this.getSprites();
			
			let frameDuration = this.getFrameDuration();
		
			for(let sprite of sprites){
				sprite.run(this.frameIndex, frameDuration);	
			}
		}
		
		toString() {
			return "GameModel";
		}
		
	}
	
	return GameModel;
	
}());
