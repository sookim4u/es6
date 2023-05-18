CALC.createNameSpace("CALC.prototype.MultiplyOperationPrototype");

CALC.prototype.MultiplyOperationPrototype = (function() {
	
	let AbstractOperationPrototype = CALC.prototype.AbstractOperationPrototype;
	
	class MultiplyOperationPrototype extends AbstractOperationPrototype {
		
		constructor(operation) {
			super(operation);
		}
	
		getClone() {
			return new MultiplyOperationPrototype(this);
		}
		
		getAnswer(firstNumber, secondNumber) {
			return firstNumber * secondNumber;
		}
		
		getOperator() {
			return "*";
		}
		
		toString() {
			return "MultiplyOperationPrototype";
		}
		
	}
	
	return MultiplyOperationPrototype;
	
}());
