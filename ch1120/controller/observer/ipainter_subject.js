PAINTER.createNameSpace("PAINTER.controller.observer.IPainterSubject");

PAINTER.controller.observer.IPainterSubject = (function() {
	
	class IPainterSubject {
		
		constructor() {
			
		}
		
		notifyObservers() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		registerObserver(oberver) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		removeObserver(oberver) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "IPainterSubject";
		}
		
	}
	
	return IPainterSubject;
	
}());
