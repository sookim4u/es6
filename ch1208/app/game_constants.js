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
	
	GameConstants.IMAGE_RESOURCE_DIR = "images";
	
	GameConstants.PLAYER_SPRITE_IMAGE_COUNT = 6;
	GameConstants.PLAYER_SPRITE_IMAGE_NAME = "player";
	
	GameConstants.DEFAULT_FONT_SIZE = 13;
	GameConstants.DEFAULT_FONT = GameConstants.DEFAULT_FONT_SIZE + "px Arial";
	
	return GameConstants;
	
}());
