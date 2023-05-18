GAME.createNameSpace("GAME.controller.factory.AbstractEnemyFactory");

GAME.controller.factory.AbstractEnemyFactory = (function() {
	
	class AbstractEnemyFactory {
		
		constructor() {
			
		}
		
		createEnemy(){
			let bodySprite = this.createBody(15, 50);
					
			let leftWingSprite = this.createLeftWing(30, 20, "red");
			
			let rightWingSprite = this.createRightWing(30, 20, "red");
					
			let airplaneCompositeSprite = new GAME.model.sprite.AirplaneCompositeSprite();
			
			airplaneCompositeSprite.addSprite(bodySprite);
			airplaneCompositeSprite.addSprite(leftWingSprite);
			airplaneCompositeSprite.addSprite(rightWingSprite);
			
			return airplaneCompositeSprite;
		}
		
		createBody(width, height) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		createLeftWing(width, height, colorRGB) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		createRightWing(width, height, colorRGB) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractEnemyFactory";
		}
		
	}
	
	return AbstractEnemyFactory;
	
}());
