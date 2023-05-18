PAINTER.createNameSpace("PAINTER.model.PainterModel");

PAINTER.model.PainterModel = (function() {
	
	class PainterModel {
		
		constructor() {
			this.pieces = [];
		}
		
		drawPieces(ctx) {
			let RectanglePiece = PAINTER.model.piece.RectanglePiece;
			let LinePiece = PAINTER.model.piece.LinePiece;
			
			let EllipsePiece = PAINTER.model.piece.EllipsePiece;
			
			for (let piece of this.pieces) {
				if(piece instanceof LinePiece) {
					piece.drawLine(ctx);
				}
				else if(piece instanceof RectanglePiece) {
					piece.drawRect(ctx);
				}
				else if(piece instanceof EllipsePiece) {
					piece.drawEllipse(ctx);
				}
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
