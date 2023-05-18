GAME.createNameSpace("GAME.app.GameConstants");

GAME.app.GameConstants = (function() {
	
	class GameConstants {
		
		constructor() {
			
		}
		
		toString() {
			return "GameConstants";
		}
		
	}
	
	GameConstants.GAME_TITLE = "Game";
	
	GameConstants.GAME_WIDTH = 600;
	GameConstants.GAME_HEIGHT = 500;
	
	GameConstants.INTERVAL_TIME = 100;
	
	return GameConstants;
	
}());
