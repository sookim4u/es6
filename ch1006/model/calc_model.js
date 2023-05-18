CALC.createNameSpace("CALC.model.CalcModel");

CALC.model.CalcModel = (function() {
	
	let OperandHandler = CALC.chain.OperandHandler;
	let NumberOperand = CALC.operand.NumberOperand;
	
	class CalcModel {
		
		constructor() {
			this.handlerList = [];
			
			let operandHandler = new OperandHandler(new NumberOperand(null));
			this.handlerList.push(operandHandler);
		}	
		
		getDisplayEquationText() {
			return null;
		}

		getDisplayText() {
			return null;
		}
		
		toString() {
			return "CalcModel";
		}
		
	}
	
	return CalcModel;

}());
