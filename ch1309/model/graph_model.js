GRAPH.createNameSpace("GRAPH.model.GraphModel");

GRAPH.model.GraphModel = (function() {
	
	let CalcContext = GRAPH.calc.interpreter.CalcContext;
	let CalcExpressionFactory = GRAPH.calc.interpreter.expression.CalcExpressionFactory;
	let Point = GRAPH.struct.Point;
	let Calculator = GRAPH.calc.Calculator;
	let GraphConstants = GRAPH.app.GraphConstants;
	
	class GraphModel {
		
		constructor() {
			this.points = [];
			
			this.minXValue = -50;
			this.minYValue = -50;
			
			this.maxXValue = 100;
			this.maxYValue = 100;
			
			this.tickXValue = 10;
			this.tickYValue = 10;
		}
		
		setMinXValue(minXValue) {
			this.minXValue = minXValue;
		}

		setMinYValue(minYValue) {
			this.minYValue = minYValue;
		}

		setMaxXValue(maxXValue) {
			this.maxXValue = maxXValue;
		}

		setMaxYValue(maxYValue) {
			this.maxYValue = maxYValue;
		}

		setTickXValue(tickXValue) {
			this.tickXValue = tickXValue;
		}

		setTickYValue(tickYValue) {
			this.tickYValue = tickYValue;
		}
		
		makePlotPoints(equation) {
			this.points = [];
			
			let calcContext = new CalcContext(equation);

			try {
				let currentToken = calcContext.getCurrentTokenAndGoToNext();

				let expression = CalcExpressionFactory.createExpression(currentToken);
				if (expression !== null) {
					expression.parse(calcContext);

					let calculator = new Calculator();
					calculator.setExpression(expression);
					
					let variableName = "x";
					let value = 0;
					
					for (let i = this.minXValue; i <= this.maxXValue; i++) {
						let x = i;
						
						value = i;
						calculator.addVariableToValue(variableName, value);
						
						let answer = calculator.calculate();
						
						let y = 0;
						if (answer === GraphConstants.INFINITE_NUMBER) {
							value = i - 0.001;
							calculator.addVariableToValue(variableName, value);

							y = parseInt(calculator.calculate());

							this.points.push(new Point(x, y));

							value = i + 0.001;
							calculator.addVariableToValue(variableName, value);

							y = parseInt(calculator.calculate());

							this.points.push(new Point(x, y));
						}
						else {
							y = parseInt(answer);

							this.points.push(new Point(x, y));
						}
					}
				}
			} catch (e) {
				console.log(e);
			}
		}

		getPoints() {
			return this.points;
		}

		getMinXValue() {
			return this.minXValue;
		}

		getMinYValue() {
			return this.minYValue;
		}

		getMaxXValue() {
			return this.maxXValue;
		}

		getMaxYValue() {
			return this.maxYValue;
		}

		getTickXValue() {
			return this.tickXValue;
		}

		getTickYValue() {
			return this.tickYValue;
		}
		
		toString() {
			return "GraphModel";
		}
		
	}
	
	return GraphModel;
	
}());
