CALC.createNameSpace("CALC.state.Client");

CALC.state.Client = (function() {
	
	class Client {
		
		constructor() {
			let StartState = CALC.state.StartState;
			
			this.displayNumber = "";
	
			this.result = 0;
			this.lastOperator = "=";
	
			this.state = null;
			
			this.changeState(StartState.getInstance());
		}
		
		updateDisplay(text) {
			this.displayNumber = text;
			
			console.log("display : " + text);
		}
		
		appendInputToDisplay(input_) {
			this.updateDisplay(this.displayNumber + input_);
		}
		
		calculate() {
			this._calculate(this.lastOperator, this.displayNumber);
		}
		
		_calculate(operator, value) {
			if (operator === "+") {
				this.result += value;
			}
			else if (operator === "-") {
				this.result -= value;
			}
			else if (operator === "*") {
				this.result *= value;
			}
			else if (operator === "/") {
				this.result /= value;
			}
			else if (operator === "=") {
				this.result = value;
			}
	
			this.updateDisplay("" + this.result);
		}
		
		changeState(state) {
			this.state = state;
	
			console.log("changeState -> " + state.toString());
		}
		
		isOperator(actionCommand) {
			if (actionCommand === "+") {
				return true;
			}
			else if (actionCommand === "-") {
				return true;
			}
			else if (actionCommand === "*") {
				return true;
			}
			else if (actionCommand === "/") {
				return true;
			}
			else if (actionCommand === "=") {
				return true;
			}
	
			return false
		}
		
		action(actionCommand) {
			this.state.action(this, actionCommand);
		}
		
		setLastOperator(lastCommand) {
			this.lastOperator = lastCommand;
		}	
		
		toString() {
			return "Client";
		}
		
	}
	
	return Client;
	
}());
