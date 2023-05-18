PAINTER.createNameSpace("PAINTER.controller.state.LineState");

PAINTER.controller.state.LineState = (function() {
	
	let IState = PAINTER.controller.state.IState;
	
	class LineState extends IState {
		
		constructor() {
			super();
			
			let LinePieceManager = PAINTER.controller.manager.LinePieceManager;
			
			if(LineState._instance) {
				return LineState._instance;
			}
	
			this.lineManager = new LinePieceManager();
			
			LineState._instance = this;
		}
		
		static getInstance() {
			if (!LineState._instance) {
				LineState._instance = new LineState();
			}
			
			return LineState._instance;
		}
	
		press(context, mouseX, mouseY) {
			this.lineManager.setStartXY(mouseX, mouseY);
		}
	
		drag(context, mouseX, mouseY) {
			this.lineManager.setEndXY(mouseX, mouseY);
	
			context.repaintView();
		}
	
		release(context, mouseX, mouseY) {
			this.lineManager.setEndXY(mouseX, mouseY);
			let piece = this.lineManager.createPiece();
			this.lineManager.reset();
	
			context.addPiece(piece);
		}
	
		drawing(context, ctx) {
			if (this.lineManager.isValid()) {
				this.lineManager.drawing(ctx);
			}
		}
		
		toString() {
			return "LineState";
		}
		
	}
	
	return LineState;
	
}());
