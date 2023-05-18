PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function() {
	
	let IPainterSubject = PAINTER.controller.observer.IPainterSubject;
	
	class PainterModel extends IPainterSubject {
		
		constructor() {
			super();
			
			let PainterConstants = PAINTER.app.PainterConstants;
			
			this.pieces = [];
			
			this.pieceType = PainterConstants.LINE;
			
			this.observers = [];
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
		
		getPieceType() {
			return this.pieceType;
		}
		
		setPieceType(pieceType) {
			this.pieceType = pieceType;
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
		
		toString() {
			return "PainterModel";
		}
		
	}
	
	return PainterModel;
	
}());
