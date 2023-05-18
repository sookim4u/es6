CALC.createNameSpace("CALC.mvvm.CalcView");

CALC.mvvm.CalcView = (function() {
	
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
			
			this.calcCommandReceiver = null;
		
			this.firstNumber = 0;
			this.secondNumber = 0;
			
			this.addResult = 0;
			this.substractResult = 0;
			this.multiplyResult = 0;
			this.divideResult = 0;
			
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
			
			let offsetX = PADDING;
			let offsetY = PADDING;
			
			offsetY += ROW_HEIGHT;
			let operator = "+";
			
			this.drawResult(operator, parseInt(this.addResult), offsetX, offsetY);
			
			offsetY += ROW_HEIGHT;
			operator = "-";
			
			this.drawResult(operator, parseInt(this.substractResult), offsetX, offsetY);
			
			offsetY += ROW_HEIGHT;
			operator = "*";
			
			this.drawResult(operator, parseInt(this.multiplyResult), offsetX, offsetY);
			
			offsetY += ROW_HEIGHT;
			operator = "/";
			
			this.drawResult(operator, parseInt(this.divideResult), offsetX, offsetY);
		}
			
		drawResult(operator, result, startX, startY) {
			let offsetX = startX;
			let offsetY = startY;
			this.drawText(String(this.firstNumber), offsetX, offsetY);
			
			offsetX += COLUMN_WIDTH;
			this.drawText(operator, offsetX, offsetY);
			
			offsetX += COLUMN_WIDTH;
			this.drawText(String(this.secondNumber), offsetX, offsetY);
			
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

		press(e) {
			console.log("press");
			
			let canvas = this.canvas;
			
			let pressPoint = this.relativePosition(e, canvas);
			
			let mouseX = pressPoint.x;
			let mouseY = pressPoint.y;
			
			let IncreaseFirstNumberCalcCommand = CALC.mvvm.command.IncreaseFirstNumberCalcCommand;
			let DecreaseFirstNumberCalcCommand = CALC.mvvm.command.DecreaseFirstNumberCalcCommand;
			let IncreaseSecondNumberCalcCommand = CALC.mvvm.command.IncreaseSecondNumberCalcCommand;
			let DecreaseSecondNumberCalcCommand = CALC.mvvm.command.DecreaseSecondNumberCalcCommand;
			
			if (this.firstIncreaseButtonArea.contains(mouseX, mouseY)) {
				let command = new IncreaseFirstNumberCalcCommand(this.calcCommandReceiver);
				command.execute();
			}
			else if (this.firstDecreaseButtonArea.contains(mouseX, mouseY)) {
				let command = new DecreaseFirstNumberCalcCommand(this.calcCommandReceiver);
				command.execute();
			}
			else if (this.secondIncreaseButtonArea.contains(mouseX, mouseY)) {
				let command = new IncreaseSecondNumberCalcCommand(this.calcCommandReceiver);
				command.execute();
			}
			else if (this.secondDecreaseButtonArea.contains(mouseX, mouseY)) {
				let command = new DecreaseSecondNumberCalcCommand(this.calcCommandReceiver);
				command.execute();
			}
		}
		
		setCalcCommandReceiver(calcCommandReceiver) {
			this.calcCommandReceiver = calcCommandReceiver;
		}

		setFirstNumber(firstNumber) {
			this.firstNumber = firstNumber;
		}

		setSecondNumber(secondNumber) {
			this.secondNumber = secondNumber;
		}

		setAddResult(addResult) {
			this.addResult = addResult;
		}

		setSubstractResult(substractResult) {
			this.substractResult = substractResult;
		}

		setMultiplyResult(multiplyResult) {
			this.multiplyResult = multiplyResult;
		}

		setDivideResult(divideResult) {
			this.divideResult = divideResult;
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
