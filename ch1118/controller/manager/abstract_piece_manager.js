PAINTER.createNameSpace("PAINTER.controller.manager.AbstractPieceManager");

PAINTER.controller.manager.AbstractPieceManager = (function() {
	
	class AbstractPieceManager {
		
		constructor() {
			
		}
		
		setStartXY(startX, startY) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		setEndXY(startX, startY) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		drawing(ctx) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		isValid() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		createPiece() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		reset() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractPieceManager";
		}
		
	}
	
	return AbstractPieceManager;
	
}());
