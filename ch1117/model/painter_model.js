PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function() {

	let IPainterSubject = PAINTER.controller.observer.IPainterSubject;

	class PainterModel extends IPainterSubject {

		constructor() {
			super();

			let PainterConstants = PAINTER.app.PainterConstants;
			let LinePieceManager = PAINTER.controller.manager.LinePieceManager;
			
			this.pieces = [];

			this.observers = [];
			
			this.pieceManager = new LinePieceManager();
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
		
		getPieceManager() {
			return this.pieceManager;
		}
		
		setPieceManager(pieceManager) {
			this.pieceManager = pieceManager;
		}
		
		toString() {
			return "PainterModel";
		}
		
	}
	
	return PainterModel;
	
}());
