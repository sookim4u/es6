CALC.createNameSpace("CALC.mv.CalcView");

CALC.mv.CalcView = (function() {
	
	let PADDING = 30;
	let COLUMN_WIDTH = 60;
	let ROW_HEIGHT = 24;
	let BUTTON_SIZE = 24;
	
	let Rectangle = CALC.struct.Rectangle;
	
	class CalcView {
		
		constructor(canvas) {
		this.canvas = canvas;
			
			this.canvas.width = 300;
			this.canvas.height = 150;
			
			this.canvas.style.border = "1px solid gray";
			this.canvas.style.cursor = "pointer";
			
			this.ctx = this.canvas.getContext("2d");
		
			this.calcModel = null;
			
			this.firstIncreaseButtonArea = new Rectangle(PADDING, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);
			this.firstDecreaseButtonArea = new Rectangle(PADDING + BUTTON_SIZE + 2, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);
			
			this.secondIncreaseButtonArea = new Rectangle(PADDING + COLUMN_WIDTH * 2, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);
			this.secondDecreaseButtonArea = new Rectangle(PADDING + COLUMN_WIDTH * 2 + BUTTON_SIZE + 2, PADDING - ROW_HEIGHT, BUTTON_SIZE, BUTTON_SIZE);  

			this.canvas.addEventListener("mousedown", this.press.bind(this), false);
		}

		redraw() {
			this.ctx.fillStyle = "white";
			this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			
			this.drawPlusButton(this.firstIncreaseButtonArea);
			this.drawMinusButton(this.firstDecreaseButtonArea);
			
			this.drawPlusButton(this.secondIncreaseButtonArea);
			this.drawMinusButton(this.secondDecreaseButtonArea);
			
			let firstNumber = this.calcModel.getFirstNumber();
			let secondNumber = this.calcModel.getSecondNumber();
			
			let offsetX = PADDING;
			let offsetY = PADDING;
			
			offsetY += ROW_HEIGHT;
			let operator = "+";
			let result = this.add(firstNumber, secondNumber);
			
			this.drawResult(operator, parseInt(result), offsetX, offsetY);
			
			offsetY += ROW_HEIGHT;
			operator = "-";
			result = this.substract(firstNumber, secondNumber);
			
			this.drawResult(operator, parseInt(result), offsetX, offsetY);
			
			offsetY += ROW_HEIGHT;
			operator = "*";
			result = this.multiply(firstNumber, secondNumber);
			
			this.drawResult(operator, parseInt(result), offsetX, offsetY);
			
			offsetY += ROW_HEIGHT;
			operator = "/";
			result = this.divide(firstNumber, secondNumber);
			
			this.drawResult(operator, parseInt(result), offsetX, offsetY);
		}
			
		add(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		substract(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		multiply(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		divide(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
				
		drawResult(operator, result, startX, startY) {
			let firstNumber = this.calcModel.getFirstNumber();
			let secondNumber = this.calcModel.getSecondNumber();
			
			let offsetX = startX;
			let offsetY = startY;
			this.drawText(String(firstNumber), offsetX, offsetY);
			
			offsetX += COLUMN_WIDTH;
			this.drawText(operator, offsetX, offsetY);
			
			offsetX += COLUMN_WIDTH;
			this.drawText(String(secondNumber), offsetX, offsetY);
			
			offsetX += COLUMN_WIDTH;
			this.drawText("=", offsetX, offsetY);
			
			offsetX += COLUMN_WIDTH;
			this.drawText(String(result), offsetX, offsetY);
		}
			
		drawPlusButton(buttonArea) {
			let sx = buttonArea.x;
			let ex = buttonArea.x + buttonArea.width;
			
			let sy = buttonArea.y;
			let ey = buttonArea.y + buttonArea.height;
		
			let cx = buttonArea.x + buttonArea.width / 2;
			let cy = buttonArea.y + buttonArea.height / 2;
			
			this.drawRectangle(sx, sy, ex, ey);
			
			this.drawLine(sx + 5, cy, ex - 5, cy);
			this.drawLine(cx, sy + 5, cx, ey - 5);
		}
			
		drawMinusButton(buttonArea) {
			let sx = buttonArea.x;
			let ex = buttonArea.x + buttonArea.width;
			
			let sy = buttonArea.y;
			let ey = buttonArea.y + buttonArea.height;
			
			let cy = buttonArea.y + buttonArea.height / 2;
			
			this.drawRectangle(sx, sy, ex, ey);
			this.drawLine(sx + 5, cy, ex - 5, cy);
		}
		
		setCalcModel(calcModel) {
			this.calcModel = calcModel;
		}
		
		press(e) {
			console.log("press");
			
			let canvas = this.canvas;
			
			let pressPoint = this.relativePosition(e, canvas);
			
			let mouseX = pressPoint.x;
			let mouseY = pressPoint.y;
			
			if (this.firstIncreaseButtonArea.contains(mouseX, mouseY)) {
				this.calcModel.increaseFirstNumber();
				this.redraw();
			}
			else if (this.firstDecreaseButtonArea.contains(mouseX, mouseY)) {
				this.calcModel.decreaseFirstNumber();
				this.redraw();
			}
			else if (this.secondIncreaseButtonArea.contains(mouseX, mouseY)) {
				this.calcModel.increaseSecondNumber();
				this.redraw();
			}
			else if (this.secondDecreaseButtonArea.contains(mouseX, mouseY)) {
				this.calcModel.decreaseSecondNumber();
				this.redraw();
			}
			
		}
		
		relativePosition(event, element) {
			let rect = element.getBoundingClientRect();
			return { x: Math.floor(event.clientX - rect.left),
					y: Math.floor(event.clientY - rect.top ) }
		}
		
		drawLine(sx, sy, ex, ey) {
			this.ctx.beginPath();
			this.ctx.moveTo(sx, sy);
			this.ctx.lineTo(ex, ey);
			this.ctx.stroke();
		}
		
		drawRectangle(sx, sy, ex, ey) {
			let width = ex - sx;
			let height = ey - sy;
			
			this.ctx.strokeRect(sx, sy, width, height);
		}
			
		drawText(text, x, y) {
			this.ctx.fillStyle = "black";
			this.ctx.font = "12px Arial";
			
			this.ctx.fillText(text, x, y);
		}
		
	}
	
	return CalcView;
	
}());
