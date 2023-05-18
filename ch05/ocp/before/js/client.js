CALC.createNameSpace("CALC.ocp.before.Client");

CALC.ocp.before.Client = (function() {
	
	class Client {
		
		constructor() {
			
		}
		
		main() {
			let after = CALC.ocp.before;
			
			let calculator = new after.Calculator();
			
			let firstNumber = 100;
			let secondNumber = 20;
			
			let operation = new after.AddOperation();
			calculator.setAddOperation(operation);
			
			let answer = calculator.add(firstNumber, secondNumber);
			
			console.log(firstNumber + "+" + secondNumber + " = " + answer);
			
			operation = new after.SubstractOperation();
			calculator.setSubstractOperation(operation);
			
			answer = calculator.substract(firstNumber, secondNumber);
			
			console.log(firstNumber + "-" + secondNumber + " = " + answer);
			
			operation = new after.MultiplyOperation();
			calculator.setMultiplyOperation(operation);
			
			answer = calculator.multiply(firstNumber, secondNumber);
			
			console.log(firstNumber + "*" + secondNumber + " = " + answer);
		}
		
		toString() {
			return "Client";
		}
		
	}
	
	return Client;
	
}());
