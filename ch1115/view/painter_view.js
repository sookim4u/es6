PAINTER.createNameSpace("PAINTER.view.PainterView");

PAINTER.view.PainterView = (function() {
	
	class PainterView {
		
		constructor() {
			let PainterConstants = PAINTER.app.PainterConstants;
			
			let PainterModel = PAINTER.model.PainterModel;
			
			let canvas = document.getElementById("mycanvas");
			canvas.width = PainterConstants.PAINTER_WIDTH;
			canvas.height = PainterConstants.PAINTER_HEIGHT;
			
			canvas.style.border = "1px solid gray";
			canvas.style.cursor = "pointer";
			
			this.canvas = canvas;
			
			let ctx = canvas.getContext("2d");
			
			ctx.lineWidth = 10;
			ctx.strokeStyle = "red";
			ctx.fillStyle = "blue";
			
			this.ctx = ctx;
			
			this.painterModel = null;
			
			this.painterController = null;
			
			this.canvasImageData = null;
			
			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
		}
		
		handleMouseEvent(e) {
			let canvas = this.canvas;
			let painterViewThis = this;
			
			let painterController = this.painterController;
			
			this.saveImageData();
			
			let pressPoint = this.relativePosition(e, canvas);
			
			painterController.controlPress(pressPoint.x, pressPoint.y);
			
			let mousemoveEventListener = function(e) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				
				painterController.controlDrag(movePoint.x, movePoint.y);
				
			};
			
			document.addEventListener("mousemove", mousemoveEventListener, false);
			
			let mouseupEventListener = function(e) {
				let upPoint = painterViewThis.relativePosition(e, canvas);
				
				painterController.controlRelease(upPoint.x, upPoint.y);
				
				document.removeEventListener("mousemove", mousemoveEventListener, false);
				document.removeEventListener("mouseup", mouseupEventListener, false);
			};
			
			document.addEventListener("mouseup", mouseupEventListener, false);
		}
		
		repaint() {
			this.ctx.putImageData(this.canvasImageData, 0, 0);
			
			this.painterModel.drawPieces(this.ctx);
		}
		
		relativePosition(event, element) {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					y: Math.floor(event.clientY - rect.top ) };
		}
		
		drawing() {
			this.ctx.putImageData(this.canvasImageData, 0, 0);
			
			if(this.painterController !== null) {
				if (this.painterController.isValidDrawing()) {
					this.painterController.drawing(this.ctx);
				}
			}
		}
		
		saveImageData() {
			this.canvasImageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
		}
		
		setPainterModel(painterModel) {
			this.painterModel = painterModel;
		}

		setPainterController(painterController) {
			this.painterController = painterController;
		}
		
		toString() {
			return "PainterView";
		}
		
	}
	
	return PainterView;
	
}());
