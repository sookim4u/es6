PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function() {
	
	class PainterView {
		
		constructor() {
			let PainterConstants = PAINTER.app.PainterConstants;
			
			let PainterModel = PAINTER.model.PainterModel;
			let LinePiece = PAINTER.model.piece.LinePiece;
			
			let RectanglePiece = PAINTER.model.piece.RectanglePiece;
			
			let EllipsePiece = PAINTER.model.piece.EllipsePiece;
			
			let canvas = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";
			
			let ctx = canvas.getContext("2d");
			
			this.ctx = ctx;
			
			this.painterModel = new PainterModel();
			
			this.painterModel.addPiece(new LinePiece(50, 50, 100, 80));
			
			this.painterModel.addPiece(new RectanglePiece(110, 20, 100, 50));
			
			this.painterModel.addPiece(new EllipsePiece(110, 120, 100, 80));
		}
		
		repaint() {
			this.painterModel.drawPieces(this.ctx);
		}
		
		toString() {
			return "PainterView";
		}
		
	}
	
	return PainterView;
	
}());
