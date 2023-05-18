PAINTER.createNameSpace("PAINTER.controller.state.IState");

PAINTER.controller.state.IState = (function() {
	
	class IState {
		
		constructor() {
			
		}
		
		press(context, mouseX, mouseY) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		drag(context, mouseX, mouseY) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		release(context, mouseX, mouseY) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		drawing(context, ctx) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IState";
		}
		
	}
	
	return IState;
	
}());
