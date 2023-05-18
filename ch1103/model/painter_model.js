PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function() {
	
	class PainterModel {
		
		constructor() {
			this.pieces = [];
		}
		
		drawPieces(ctx) {
			for (let piece of this.pieces) {
				piece.drawLine(ctx);
			}
		}
	
		addPiece(piece) {
			this.pieces.push(piece);
		}
		
		toString() {
			return "PainterModel";
		}
		
	}
	
	return PainterModel;
	
}());
