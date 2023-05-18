CALC.createNameSpace("CALC.prototype.DivideOperationPrototype");

CALC.prototype.DivideOperationPrototype = (function() {
	
	let AbstractOperationPrototype = CALC.prototype.AbstractOperationPrototype;
	
	class DivideOperationPrototype extends AbstractOperationPrototype {
		
		constructor(operation) {
			super(operation);
		}
	
		getClone() {
			return new DivideOperationPrototype(this);
		}
		
		getAnswer(firstNumber, secondNumber) {
			return firstNumber / secondNumber;
		}
		
		getOperator() {
			return "/";
		}
		
		toString() {
			return "DivideOperationPrototype";
		}
		
	}
	
	return DivideOperationPrototype;
	
}());
