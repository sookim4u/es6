PAINTER.createNameSpace("PAINTER.model.piece.EllipsePiece");

PAINTER.model.piece.EllipsePiece = (function() {
	
	class EllipsePiece {
		
		constructor(x, y, width, height) {
			this.strokeColor = "green";
			this.strokeWidth = 10;
	
			this.fillColor = "yellow";
			
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		drawEllipse(ctx) {
			ctx.lineWidth = this.strokeWidth;
			ctx.strokeStyle = this.strokeColor;
			ctx.fillStyle = this.fillColor;
			
			this.drawEllipseByBezierCurve(ctx, this.x, this.y, this.width, this.height);
		}
		
		drawEllipseByBezierCurve(ctx, x, y, w, h) {
			let kappa = .5522848,
			ox = (w / 2) * kappa, 
			oy = (h / 2) * kappa, 
			xe = x + w, 
			ye = y + h,
			xm = x + w / 2,
			ym = y + h / 2;
	
			ctx.beginPath();
			ctx.moveTo(x, ym);
			ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
			ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
			ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
			ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
			
			ctx.fill();
			
			ctx.stroke();
		}
		
		toString() {
			return "EllipsePiece";
		}
	
	}
		
	return EllipsePiece;
	
}());
