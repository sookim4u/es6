CALC.createNameSpace("CALC.state.EqualState");

CALC.state.EqualState = (function() {
	
	let IState = CALC.state.IState;
	
	class EqualState extends IState {
		
		constructor() {
			super();
			
			if(EqualState._instance) {
				return EqualState._instance;
			}
			
			EqualState._instance = this;
		}
		
		static getInstance() {
			if (!EqualState._instance) {
				EqualState._instance = new EqualState();
			}
			
			return EqualState._instance;
		}
		
		getDisplayText(model) {
			return model.getResultText();
		}
	
		getEquationText(model) {
			return "";
		}
	
		handleOperator(context, actionCommand) {
			if (actionCommand === "+") {
				context.addHandler(new CALC.chain.AddOperationHandler(null));
			}
			else if (actionCommand === "-") {
				context.addHandler(new CALC.chain.SubstractOperationHandler(null));
			}
			else if (actionCommand === "*") {
				context.addHandler(new CALC.chain.MultiplyOperationHandler(null));
			}
			else if (actionCommand === "/") {
				context.addHandler(new CALC.chain.DivideOperationHandler(null));
			}
			
			context.changeState(EqualState.getInstance());
		}
	
		handleEqual(context) {
			
		}
	
		handleNumber(context, actionCommand) {
			let input = actionCommand
			
			let numberOperand = new CALC.operand.NumberOperand(null)
			numberOperand.append(input)
			
			let newOperandHandler = new CALC.chain.OperandHandler(numberOperand)
			
			context.initHandler()
			
			context.addHandler(newOperandHandler)
			
			context.changeState(CALC.state.InputState.getInstance())
		}
		
		toString() {
			return "EqualState";
		}
		
	}
	
	return EqualState;
	
}());
