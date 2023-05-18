CALC.createNameSpace("CALC.state.OperatorState");

CALC.state.OperatorState = (function() {
	
	let IState = CALC.state.IState;
	
	class OperatorState extends IState {
		
		constructor() {
			super();
			
			if(OperatorState._instance) {
				return OperatorState._instance;
			}
			
			OperatorState._instance = this;
		}
		
		static getInstance() {
			if (!OperatorState._instance) {
				OperatorState._instance = new OperatorState();
			}
			
			return OperatorState._instance;
		}
	
		getDisplayText(model) {
			return model.getResultText();
		}
	
		getEquationText(model) {
			return model.getEquationText();
		}
	
		handleOperator(context, actionCommand) {
			if (actionCommand === "+") {
				context.replaceHandler(new CALC.chain.AddOperationHandler(null));
			}
			else if (actionCommand === "-") {
				context.replaceHandler(new CALC.chain.SubstractOperationHandler(null));
			}
			else if (actionCommand === "*") {
				context.replaceHandler(new CALC.chain.MultiplyOperationHandler(null));
			}
			else if (actionCommand === "/") {
				context.replaceHandler(new CALC.chain.DivideOperationHandler(null));
			}
		}
	
		handleEqual(context) {
			let resultText = context.getResultText();
			
			let firstNumber = parseFloat(resultText);
			let secondNumber = firstNumber;
			
			let lastOperationHandler = context.getLastHandler();
			let result = lastOperationHandler.operateNumber(firstNumber, secondNumber);
			
			let input = null;
			if (result - parseInt(result) === 0) {
				input = "" + String(parseInt(result));
			}
			else {
				input = "" + result;
			}
			
			let numberOperand = new CALC.operand.NumberOperand(null);
			numberOperand.append(input);
			
			let newOperandHandler = new CALC.chain.OperandHandler(numberOperand);
			
			context.initHandler();
			
			context.addHandler(newOperandHandler);
			
			context.changeState(CALC.state.EqualState.getInstance());
		}
	
		handleNumber(context, actionCommand) {
			let input = actionCommand;
			
			let numberOperand = new CALC.operand.NumberOperand(null);
			numberOperand.append(input);
			
			context.setLastOperand(numberOperand);
			
			context.changeState(CALC.state.InputState.getInstance());
		}
	
		toString() {
			return "OperatorState";
		}
		
	}
	
	return OperatorState;
	
}());
