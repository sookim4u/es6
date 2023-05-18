GAME.createNameSpace("GAME.controller.scene.PlayGameScene");

GAME.controller.scene.PlayGameScene = (function() {
	
	let ImplGameScene = GAME.controller.scene.ImplGameScene;
	
	class PlayGameScene extends ImplGameScene {
		
		constructor() {
			super();
			
			this.playerSprite = null;
			
			this.enemySprites = [];
			
			this.missileSprites = [];
			
			this.lifeSprite = null;
			this.scoreSprite = null;
			
			this.stage = 1;
			
			if(PlayGameScene._instance) {
				return PlayGameScene._instance;
			}

			PlayGameScene._instance = this;
		}

		static getInstance() {
			if (!PlayGameScene._instance) {
				PlayGameScene._instance = new PlayGameScene();
			}
			
			return PlayGameScene._instance;
		}
		
		setLife(life){		
			this.lifeSprite.setLabel("" + life);
		}
		
		setScore(score){		
			this.scoreSprite.setLabel("" + score);
		}
		
		setup(context) {
			let SpriteFactory = GAME.controller.factory.SpriteFactory;
			let GameConstants = GAME.app.GameConstants;
			
			this.playerSprite = SpriteFactory.createImageSprite(GameConstants.PLAYER_SPRITE_IMAGE_NAME, GameConstants.PLAYER_SPRITE_IMAGE_COUNT);
			
			this.playerSprite.setAnchorX(0.5);
			this.playerSprite.setAnchorY(1.0);
										
			this.playerSprite.setX(context.getScreenWidth() / 2);
			this.playerSprite.setY(context.getScreenHeight());
			
			let screenWidth = context.getScreenWidth();
			
			let width = 150;
			let height = 30;
			
			if(this.lifeSprite === null){
				this.lifeSprite = SpriteFactory.createLabelSprite("" + GameConstants.MAX_LIFE, width, height);
				
				this.lifeSprite.setAnchorX(0);
				this.lifeSprite.setAnchorY(0);
				
				this.lifeSprite.setX(0);
				this.lifeSprite.setY(0);
			}
			
			if(this.scoreSprite === null){
				this.scoreSprite = SpriteFactory.createLabelSprite("0", width, height);
				
				this.scoreSprite.setAnchorX(0);
				this.scoreSprite.setAnchorY(0);
				
				this.scoreSprite.setX(screenWidth - width);
				this.scoreSprite.setY(0);	
			}
		}
		
		createEnemySprite(currentFrameIndex, frameDuration){
			let MoveByAction = GAME.model.action.MoveByAction;
			let RectangleEnemyFactory = GAME.controller.factory.RectangleEnemyFactory;
			let EllipseEnemyFactory = GAME.controller.factory.EllipseEnemyFactory;
			
			let time = 10;
			
			let byPositionX = 0;
			let byPositionY = 1000;
			let moveByAction1 = new MoveByAction(time, byPositionX, byPositionY);
			
			let enemyFactory = null;
			
			if(this.stage === 1) {
				enemyFactory = new RectangleEnemyFactory();
			}
			else {
				enemyFactory = new EllipseEnemyFactory();
			}
			
			let enemySprite = enemyFactory.createEnemy();
			
			moveByAction1.setStartFrameIndex(currentFrameIndex, frameDuration);		
			enemySprite.setAction(moveByAction1);	
			
			return enemySprite;
		}
		
		createEnemy(context) {
			let GameConstants = GAME.app.GameConstants;
			
			let currentFrameIndex = context.getCurrentFrameIndex(); 
			let frameDuration = context.getFrameDuration();
			
			let screenWidth = context.getScreenWidth();
			
			let positionX = 0;
			let positionY = 0;
			
			if(currentFrameIndex % GameConstants.CREATE_EMEMY_PERIOD === 0) {
				let airplaneCompositeSprite = this.createEnemySprite(currentFrameIndex, frameDuration);
				
				positionX = parseFloat(screenWidth * Math.random()); 
				
				airplaneCompositeSprite.setX(positionX);
				airplaneCompositeSprite.setY(positionY);
							
				this.enemySprites.push(airplaneCompositeSprite);
			}
		}

		getSprites() {
			let sprites = [];
			
			if(this.playerSprite !== null) {
				sprites.push(this.playerSprite);
			}
			
			for(let enemySprite of this.enemySprites){
				sprites.push(enemySprite);
			}
			
			for(let missileSprite of this.missileSprites){
				sprites.push(missileSprite);
			}
			
			if(this.lifeSprite !== null) {
				sprites.push(this.lifeSprite);
			}
			
			if(this.scoreSprite !== null) {
				sprites.push(this.scoreSprite);
			}
			
			return sprites;
		}

		update(context, frameIndex) {
			super.update(context, frameIndex);
			
			this.createEnemy(context);
			
			this.checkExitFromScreen(context);
			
			this.checkCollision(context);
			
			this.checkScore(context);
		}
			
		finish() {
			let GameConstants = GAME.app.GameConstants;
			
			this.enemySprites = [];		
			
			this.missileSprites = [];	
			
			this.setLife(GameConstants.MAX_LIFE);
			this.setScore(0);
			
			if(this.stage === GameConstants.MAX_STAGE){
				this.stage = 1;
			}
			else{
				this.stage++;		
			}		
		}
		
		createMissile(currentFrameIndex, frameDuration){
			let MoveByAction = GAME.model.action.MoveByAction;
			let SpriteFactory = GAME.controller.factory.SpriteFactory;
			
			let time = 2;
			
			let byPositionX = 0;
			let byPositionY = -1000;
			let moveByAction1 = new MoveByAction(time, byPositionX, byPositionY);
			
			let missileSprite = SpriteFactory.createMissileSprite();
			
			moveByAction1.setStartFrameIndex(currentFrameIndex, frameDuration);		
			missileSprite.setAction(moveByAction1);
			
			return missileSprite;
		}
		
		keyPressed(context, e) {
			let keyCode = e.keyCode;
			
			let VK_LEFT = 37;
			let VK_RIGHT = 39;
			let VK_SPACE = 32;
			
			if(keyCode == VK_LEFT) {
				let step  = 5;
				this.playerSprite.decreaseX(step);
			}
			else if(keyCode == VK_RIGHT) {
				let step  = 5;
				this.playerSprite.increaseX(step);
			}
			else if(keyCode == VK_SPACE) {
				let currentFrameIndex = context.getCurrentFrameIndex() + 1;
				let frameDuration = context.getFrameDuration();
				
				let missileSprite = this.createMissile(currentFrameIndex, frameDuration);
				
				let bound = this.playerSprite.getBounds();
				
				let positionX = bound.x + bound.width / 2;
				let positionY = bound.y;
				
				missileSprite.setX(positionX);
				missileSprite.setY(positionY);
				
				this.missileSprites.push(missileSprite);
			}
			
		}
		
		getLife(){		
			return parseInt(this.lifeSprite.getLabel(), 10);
		}
		
		getScore(){
			return parseInt(this.scoreSprite.getLabel(), 10);
		}
		
		increaseScore(){
			let score = this.getScore();
			
			score++;
			
			this.scoreSprite.setLabel("" + score);
		}
		
		checkScore(context) {	
			let GameConstants = GAME.app.GameConstants;
			let PlayGameScene = GAME.controller.scene.PlayGameScene;
			let ResultGameScene = GAME.controller.scene.ResultGameScene;
			
			let score = this.getScore();
			
			if(score >= GameConstants.MAX_SCORE) {
				if(this.stage < GameConstants.MAX_STAGE){
					context.changeScene(PlayGameScene.getInstance());
				}
				else{
					context.changeScene(ResultGameScene.getInstance());
				}
			}
		}
		
		checkExitFromScreen(context){
			let Rectangle = GAME.model.struct.Rectangle;
			
			let width = context.getScreenWidth();
			let height = context.getScreenHeight();
			
			let screenBound = new Rectangle(0, 0, parseInt(width, 10), parseInt(height, 10));
			
			for(let i = this.enemySprites.length - 1; i >= 0; i--){			
				if(this.enemySprites[i].getBounds().intersects(screenBound) === false){
					this.enemySprites.splice(i, 1);				
				}			
			}
			
			for(let i = this.missileSprites.length - 1; i >= 0; i--){
				if(this.missileSprites[i].getBounds().intersects(screenBound) === false){
					this.missileSprites.splice(i, 1);
				}			
			}
			
		}

		checkCollision(context){
			let ResultGameScene = GAME.controller.scene.ResultGameScene;
			
			let playerSpriteBound = this.playerSprite.getBounds();
			
			for(let i = this.enemySprites.length - 1; i >= 0; i--){
				if(this.enemySprites[i].getBounds().intersects(playerSpriteBound)){
					this.enemySprites.splice(i, 1);
					
					let life = this.getLife();
					
					if(life <= 1) {
						context.changeScene(ResultGameScene.getInstance());
					}
					else{
						this.setLife(life - 1);
					}
					
					break;
				}			
			}
			
			for(let i = this.enemySprites.length - 1; i >= 0; i--){			
				for(let j = this.missileSprites.length - 1; j >= 0; j--){				
					if(this.enemySprites[i].getBounds().intersects(this.missileSprites[j].getBounds())){
						
						this.enemySprites.splice(i, 1);
						this.missileSprites.splice(j, 1);
						
						this.increaseScore();
					}	
				}		
			}
			
		}
		
		toString() {
			return "PlayGameScene";
		}
		
	}
	
	return PlayGameScene;
	
}());
