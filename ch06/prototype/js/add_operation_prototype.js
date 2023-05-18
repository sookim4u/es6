CALC.createNameSpace("CALC.prototype.AddOperationPrototype");

CALC.prototype.AddOperationPrototype = (function() {
	
	let AbstractOperationPrototype = CALC.prototype.AbstractOperationPrototype;
	
	class AddOperationPrototype extends AbstractOperationPrototype {
		
		constructor(operation) {
			super(operation);
		}
	
		getClone() {
			return new AddOperationPrototype(this);
		}
		
		getAnswer(firstNumber, secondNumber) {
			return firstNumber + secondNumber;
		}
		
		getOperator() {
			return "+";
		}
		
		toString() {
			return "AddOperationPrototype";
		}
		
	}
	
	return AddOperationPrototype;
	
}());
