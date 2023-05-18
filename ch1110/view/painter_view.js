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
			
			this.painterModel = new PainterModel();
			
			this.pieceType = PainterConstants.LINE;
			
			this.startX = 0;
			this.startY = 0;

			this.endX = 0;
			this.endY = 0;
			
			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
		}
		
		handleMouseEvent(e) {
			let canvas = this.canvas;
			let painterViewThis = this;
			
			let canvasImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
			
			let pressPoint = this.relativePosition(e, canvas);
			
			painterViewThis.startX = pressPoint.x;
			painterViewThis.startY = pressPoint.y;

			
			let mousemoveEventListener = function(e) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				
				painterViewThis.endX = movePoint.x;
				painterViewThis.endY = movePoint.y;
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
				
			};
			
			document.addEventListener("mousemove", mousemoveEventListener, false);
			
			let mouseupEventListener = function(e) {
				let upPoint = painterViewThis.relativePosition(e, canvas);
				
				painterViewThis.endX = upPoint.x;
				painterViewThis.endY = upPoint.y;
				
				painterViewThis.ctx.putImageData(canvasImageData, 0, 0);
				
				painterViewThis.drawing(painterViewThis.ctx);
				
				document.removeEventListener("mousemove", mousemoveEventListener, false);
				document.removeEventListener("mouseup", mouseupEventListener, false);
			};
			
			document.addEventListener("mouseup", mouseupEventListener, false);
		}
		
		repaint() {
			this.painterModel.drawPieces(this.ctx);
		}
		
		relativePosition(event, element) {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					y: Math.floor(event.clientY - rect.top ) };
		}
		
		setPieceType(pieceType) {
			this.pieceType = pieceType;
		}
		
		drawing(ctx) {
			let PainterConstants = PAINTER.app.PainterConstants;
			
			if(this.pieceType === PainterConstants.LINE) {
				ctx.beginPath();
				ctx.moveTo(this.startX, this.startY);
				ctx.lineTo(this.endX, this.endY);
				ctx.stroke();
			}
		}
		
		toString() {
			return "PainterView";
		}
		
	}
	
	return PainterView;
	
}());
