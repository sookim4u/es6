PAINTER.createNameSpace("PAINTER.controller.state.IContext");

PAINTER.controller.state.IContext = (function() {
	
	class IContext {
		
		constructor() {
			
		}
		
		changeState(state) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		repaintView() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		addPiece(piece) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IContext";
		}
		
	}
	
	return IContext;
	
}());
