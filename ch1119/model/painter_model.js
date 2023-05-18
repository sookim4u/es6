PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function() {

	let IPainterSubject = PAINTER.controller.observer.IPainterSubject;

	class PainterModel extends IPainterSubject {

		constructor() {
			super();

			let PainterConstants = PAINTER.app.PainterConstants;
			let LineState = PAINTER.controller.state.LineState;
			
			this.pieces = [];
			
			this.observers = [];
			
			this.state = LineState.getInstance();
		}
		
		drawPieces(ctx) {
			for (let piece of this.pieces) {
				piece.draw(ctx);
			}
		}
		
		addPiece(piece) {
			this.pieces.push(piece);
			
			this.notifyObservers();
		}
		
		getPieces() {
			return this.pieces;
		}
		
		notifyObservers() {
			for (let observer of this.observers) {
				observer.update();
			}
		}
		
		registerObserver(oberver) {
			this.observers.push(oberver);
		}
		
		removeObserver(oberver) {
			let index = this.observers.indexOf(oberver);
			if (index >= 0) {
				this.observers.splice(index, 1);
			}
		}
		
		getState() {
			return this.state;
		}
		
		setState(state) {
			this.state = state;
		}
		
		toString() {
			return "PainterModel";
		}
		
	}
	
	return PainterModel;
	
}());
