CALC.createNameSpace("CALC.prototype.SubstractOperationPrototype");

CALC.prototype.SubstractOperationPrototype = (function() {
	
	let AbstractOperationPrototype = CALC.prototype.AbstractOperationPrototype;
	
	class SubstractOperationPrototype extends AbstractOperationPrototype {
		
		constructor(operation) {
			super(operation);
		}
	
		getClone() {
			return new SubstractOperationPrototype(this);
		}
		
		getAnswer(firstNumber, secondNumber) {
			return firstNumber - secondNumber;
		}
		
		getOperator() {
			return "-";
		}
		
		toString() {
			return "SubstractOperationPrototype";
		}
		
	}
	
	return SubstractOperationPrototype;
	
}());
