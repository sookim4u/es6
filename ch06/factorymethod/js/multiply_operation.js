CALC.createNameSpace("CALC.factorymethod.MultiplyOperation");

CALC.factorymethod.MultiplyOperation = (function() {
	
	let MultiplyOperator = CALC.factorymethod.MultiplyOperator;
	
	let AbstractOperation = CALC.factorymethod.AbstractOperation;
	
	class MultiplyOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator() {
			return new MultiplyOperator();
		}
		
		toString() {
			return "MultiplyOperation";
		}
		
	}
	
	return MultiplyOperation;
	
}());
