GRAPH.createNameSpace("GRAPH.view.GraphView");

GRAPH.view.GraphView = (function() {
	
	let GraphConstants = GRAPH.app.GraphConstants;
	let CalcContext = GRAPH.calc.interpreter.CalcContext;
	let CalcExpressionFactory = GRAPH.calc.interpreter.expression.CalcExpressionFactory;
	let Point = GRAPH.struct.Point;
	let Calculator = GRAPH.calc.Calculator;
	let GraphUtil = GRAPH.app.GraphUtil;
	let GraphModel = GRAPH.model.GraphModel;
	
	class GraphView {
		
		constructor(graphCanvas) {
			this.canvas = graphCanvas;
			
			this.canvas.width = GraphConstants.VIEW_WIDTH;
			this.canvas.height = GraphConstants.VIEW_HEIGHT;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
			
			this.model = null;
		}

		redraw() {
			this.ctx.fillStyle = "white";
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			
			let width = GraphConstants.VIEW_WIDTH;
			let height = GraphConstants.VIEW_HEIGHT;
			
			let xRatio = this.getXRatio();
			let yRatio = this.getYRatio();
			
			let minXValue = this.model.getMinXValue();
			let maxYValue = this.model.getMaxYValue();
			
			let ox = GraphConstants.AXIS_MARGIN + parseInt((-1) * minXValue * xRatio);
			let oy = GraphConstants.AXIS_MARGIN + parseInt(maxYValue*yRatio);
			
			this.drawXAxisGrid(ox, oy);
			this.drawYAxisGrid(ox, oy);

			this.drawXAxis(ox, oy, width);
			this.drawYAxis(ox, oy, height);
			
			this.drawViewRect();
			
			let points = this.model.getPoints();
			
			let sx = 0;
			let sy = 0;
			let ex = 0;
			let ey = 0;
			
			this.ctx.strokeStyle = GraphConstants.GRAPH_COLOR;
			
			let pointCount = points.length;
			
			if(pointCount > 0) {
				sx = parseInt(points[0].x * xRatio + ox);
				sy = parseInt(oy - points[0].y * yRatio);
				
				this.ctx.beginPath();
				this.ctx.moveTo(sx, sy);
				
				for (let i = 1; i < pointCount; i++) {
					let point= points[i];
					
					sx = parseInt(point.x * xRatio + ox);
					sy = parseInt(oy - point.y * yRatio);
					
					this.ctx.lineTo(sx, sy);
				}
				
				this.ctx.stroke();
			}
		}
			
		drawViewRect() {
			let x = GraphConstants.AXIS_MARGIN;
			let y = GraphConstants.AXIS_MARGIN;
			
			let width = this.getViewWidth();
			let height = this.getViewHeight();
			
			this.ctx.strokeStyle = GraphConstants.VIEW_BORDER_COLOR;
			this.ctx.strokeRect(x, y, width, height);
		}

		drawXAxis(ox, oy, width) {
			this.drawLine(0, oy, width, oy, GraphConstants.AXIS_COLOR);
			
			let arrowHeadSize = GraphConstants.AXIS_ARROW_HEAD_SIZE;
			
			this.drawLine(width - arrowHeadSize, oy - arrowHeadSize / 2, width, oy, GraphConstants.AXIS_COLOR);
			this.drawLine(width, oy, width - arrowHeadSize, oy + arrowHeadSize / 2, GraphConstants.AXIS_COLOR);
			
			this.drawText("x", width - arrowHeadSize - 7, oy - arrowHeadSize / 2 - 2, GraphConstants.AXIS_COLOR);
			
			this.drawXAxisTicks(ox, oy);
		}

		drawXAxisTicks(ox, oy) {
			let maxXValue = this.model.getMaxXValue();
			let minXValue = this.model.getMinXValue();
			let tickXValue = this.model.getTickXValue();
			
			let xRatio = this.getXRatio();
			
			let halfTickWidth = GraphConstants.TICK_WIDTH / 2;
			
			let tickCount = parseInt(maxXValue / tickXValue);
			
			let x = 0;
			let y1 = 0;
			let y2 = 0;
			for (let i = 1; i <= tickCount; i++) {
				x = ox + parseInt(i * (tickXValue * xRatio));
				
				y1 = oy - halfTickWidth;
				y2 = oy + halfTickWidth;
			
				this.drawLine(x, y1, x, y2, GraphConstants.AXIS_COLOR);
				
				let tickTextY = y2 + GraphConstants.TICK_WIDTH + GraphConstants.TICK_MARGIN;
				let tickText = "" + String(tickXValue * i);
				
				let tickTextWidth = this.getTextWidth(tickText);
				
				this.drawText(tickText, x - tickTextWidth / 2, tickTextY, GraphConstants.AXIS_COLOR);
			}
			
			tickCount = parseInt((-1) * minXValue / tickXValue);
			
			for (let i = 1; i <= tickCount; i++) {    
				x = ox - parseInt(i * (tickXValue * xRatio));
				y1 = oy - halfTickWidth;
				y2 = oy + halfTickWidth;
				
				this.drawLine(x, y1, x, y2, GraphConstants.AXIS_COLOR);
				
				let tickTextY = y2 + GraphConstants.TICK_WIDTH + GraphConstants.TICK_MARGIN;
				let tickText = "-" + String(tickXValue * i);
				
				let tickTextWidth = this.getTextWidth(tickText);
				
				this.drawText(tickText, x - tickTextWidth / 2, tickTextY, GraphConstants.AXIS_COLOR);
			}
		}

		drawXAxisGrid(ox, oy) {
			let maxXValue = this.model.getMaxXValue();
			let minXValue = this.model.getMinXValue();
			let tickXValue = this.model.getTickXValue();
			
			let sy = GraphConstants.AXIS_MARGIN;
			let height = this.getViewHeight();
			
			let ey = sy + height;
			
			let xRatio = this.getXRatio();
			
			let tickCount = parseInt(maxXValue / tickXValue);
			let x = 0;
			for (let i = 1; i <= tickCount; i++) {
				x = ox + parseInt(i * (tickXValue * xRatio));
				
				this.drawLine(x, sy, x, ey, GraphConstants.GRID_COLOR);
			}
			
			tickCount = parseInt(((-1) * minXValue / tickXValue));
			for (let i = 1; i <= tickCount; i++) {
				x = ox - parseInt(i * (tickXValue * xRatio));
				
				this.drawLine(x, sy, x, ey, GraphConstants.GRID_COLOR);
			}
		}

		drawYAxis(ox, oy, height) {
			this.drawLine(ox, 0, ox, height, GraphConstants.AXIS_COLOR);
			
			let arrowHeadSize = GraphConstants.AXIS_ARROW_HEAD_SIZE;
			
			this.drawLine(ox - arrowHeadSize / 2, arrowHeadSize, ox, 0, GraphConstants.AXIS_COLOR);
			this.drawLine(ox, 0, ox + arrowHeadSize / 2, arrowHeadSize, GraphConstants.AXIS_COLOR);
			
			this.drawText("y", ox + arrowHeadSize / 2 + 2, arrowHeadSize + 5, GraphConstants.AXIS_COLOR);
			
			this.drawYAxisTicks(ox, oy);
		}

		drawYAxisTicks(ox, oy) {
			let maxYValue = this.model.getMaxYValue();
			let minYValue = this.model.getMinYValue();
			let tickYValue = this.model.getTickYValue();
			
			let yRatio = this.getYRatio();
			
			let halfTickWidth = GraphConstants.TICK_WIDTH / 2;
			
			let tickCount = parseInt(((-1) * minYValue) / tickYValue);
			
			let x1 = 0;
			let x2 = 0;
			let y = 0;
			for (let i = 1; i <= tickCount; i++) {
				x1 = ox - halfTickWidth;
				x2 = ox + halfTickWidth;
				y = oy + parseInt(i * (tickYValue * yRatio));
				
				this.drawLine(x1, y, x2, y, GraphConstants.AXIS_COLOR);
				
				let tickText = "-" + String(tickYValue * i);
				
				let tickTextWidth = this.getTextWidth(tickText);
				
				let tickTextX = parseInt(x1 - tickTextWidth);
				
				this.drawText(tickText, tickTextX, y + GraphConstants.DEFAULT_FONT_SIZE / 2, GraphConstants.AXIS_COLOR);
			}
			
			tickCount = parseInt(maxYValue / tickYValue);
			
			for (let i = 1; i <= tickCount; i++) {
				x1 = ox - halfTickWidth;
				x2 = ox + halfTickWidth;
				y = oy - parseInt(i * (tickYValue * yRatio));
				
				this.drawLine(x1, y, x2, y, GraphConstants.AXIS_COLOR);
				
				let tickText = "" + String(tickYValue * i);
				
				let tickTextWidth = this.getTextWidth(tickText);
				
				let tickTextX = parseInt(x1 - tickTextWidth);
				
				this.drawText(tickText, tickTextX, y + GraphConstants.DEFAULT_FONT_SIZE / 2, GraphConstants.AXIS_COLOR);
			}
		}

		drawYAxisGrid(ox, oy) {
			let maxYValue = this.model.getMaxYValue();
			let minYValue = this.model.getMinYValue();
			let tickYValue = this.model.getTickYValue();
			
			let sx = GraphConstants.AXIS_MARGIN;
			let width = this.getViewWidth();
			
			let ex = sx + width;
			
			let yRatio = this.getYRatio();
			
			let tickCount = parseInt(((-1) * minYValue) / tickYValue);
			let y = 0;
			for (let i = 1; i <= tickCount; i++) {
				y = oy + parseInt(i * (tickYValue * yRatio));
				
				this.drawLine(sx, y, ex, y, GraphConstants.GRID_COLOR);
			}
			
			tickCount = parseInt(maxYValue / tickYValue);
			for (let i = 1; i <= tickCount; i++) {    
				y = oy - parseInt(i * (tickYValue * yRatio));
				
				this.drawLine(sx, y, ex, y, GraphConstants.GRID_COLOR);
			}
		}
		
		getXRatio() {
			let maxXValue = this.model.getMaxXValue();
			let minXValue = this.model.getMinXValue();
			
			let viewWidth = this.getViewWidth();
			return parseFloat(viewWidth) / parseFloat(maxXValue - minXValue);
		}

		getYRatio() {
			let maxYValue = this.model.getMaxYValue();
			let minYValue = this.model.getMinYValue();
			
			let viewHeight = this.getViewHeight();
			return parseFloat(viewHeight) / parseFloat(maxYValue - minYValue);
		}
		
		getViewWidth() {
			let viewWidth = GraphConstants.VIEW_WIDTH - GraphConstants.AXIS_MARGIN * 2;
			return viewWidth;
		}
		
		getViewHeight() {
			let viewHeight = GraphConstants.VIEW_HEIGHT - GraphConstants.AXIS_MARGIN * 2;
			return viewHeight;
		}
			
		getTextWidth(text) {
			let textWidth = GraphUtil.getTextWidth(this.ctx, text);
			
			return textWidth;
		}
		
		drawLine(sx, sy, ex, ey, color) {
			this.ctx.strokeStyle = color;
			
			this.ctx.beginPath();
			this.ctx.moveTo(sx, sy);
			this.ctx.lineTo(ex, ey);
			this.ctx.stroke();
		}
			
		drawText(text, x, y, color) {
			this.ctx.fillStyle = color;
			
			let GraphConstants = GRAPH.app.GraphConstants;
			
			this.ctx.font = GraphConstants.DEFAULT_FONT;
			
			this.ctx.fillText(text, x, y);
		}
		
		setModel(model) {
			this.model = model;
		}

		toString() {
			return "GraphView";
		}
		
	}
	
	return GraphView;
	
}());
