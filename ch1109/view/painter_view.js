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
		
			this.ctx = ctx;
			
			this.painterModel = new PainterModel();
			
			canvas.addEventListener("mousedown", this.handleMouseEvent.bind(this), false);
		}
		
		handleMouseEvent(e) {
			let canvas = this.canvas;
			let painterViewThis = this;
			
			let pressPoint = this.relativePosition(e, canvas);
			
			console.log("mousedown p.x = " + pressPoint.x + " p.y = " + pressPoint.y);
			
			let mousemoveEventListener = function(e) {
				let movePoint = painterViewThis.relativePosition(e, painterViewThis.canvas);
				
				console.log("mousemove p.x = " + movePoint.x + " p.y = " + movePoint.y);
			};
			
			document.addEventListener("mousemove", mousemoveEventListener, false);
			
			let mouseupEventListener = function(e) {
				let upPoint = painterViewThis.relativePosition(e, canvas);
				
				console.log("mouseup p.x = " + upPoint.x + " p.y = " + upPoint.y);
				
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
		
		toString() {
			return "PainterView";
		}
		
	}
	
	return PainterView;
	
}());
