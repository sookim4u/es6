CALC.createNameSpace("CALC.flyweight.PrintAnswer");

CALC.flyweight.PrintAnswer = (function() {
	
	class PrintAnswer {
		
		constructor() {
			let TextStyleFlywieightFactory = CALC.flyweight.TextStyleFlywieightFactory;
			
			this.textStyleFlywieightFactory = TextStyleFlywieightFactory.getInstance();
			this.firstNumber = 0;
			this.secondNumber = 0;
		}
		
		printResult() {
			let FlyweightConstants = CALC.flyweight.FlyweightConstants;
			
			let answers = [0,0,0,0];
	
			answers[0] = this.firstNumber + this.secondNumber;
			answers[1] = this.firstNumber - this.secondNumber;
			answers[2] = this.firstNumber * this.secondNumber;
			answers[3] = this.firstNumber / this.secondNumber;
	
			for(let i = 0; i < answers.length; i++) {
				let operator = FlyweightConstants.OPERATORS[i];
				let textArray = ["","","","",""];
				textArray[0] = "" + this.firstNumber + this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME);
				textArray[1] = operator;
				textArray[2] = "" + this.secondNumber + this.getTextStyle(FlyweightConstants.NUMBER_STYLE_NAME);
				textArray[3] = FlyweightConstants.EQUAL_CHAR;
				textArray[4] = "" + answers[i] + this.getTextStyle(FlyweightConstants.ANSWER_STYLE_NAME);
	
				console.log(textArray[0],textArray[1],textArray[2],textArray[3],textArray[4]);
			}
		}
		
		getTextStyle(name) {
			return this.textStyleFlywieightFactory.getTextStyleFlywieight(name);
		}
		
		setFirstNumber(firstNumber) {
			this.firstNumber = firstNumber;
		}
		
		setSecondNumber(secondNumber) {
			this.secondNumber = secondNumber;
		}
		
		toString() {
				return "PrintAnswer";
		}
		
	}
	
	return PrintAnswer;
	
}());
