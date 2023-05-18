PAINTER.createNameSpace("PAINTER.controller.observer.IPainterObserver");

PAINTER.controller.observer.IPainterObserver = (function() {
	
	class IPainterObserver {
		
		constructor() {
			
		}
		
		update() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IPainterObserver";
		}
		
	}
	
	return IPainterObserver;
	
}());
