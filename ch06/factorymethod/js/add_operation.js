CALC.createNameSpace("CALC.factorymethod.AddOperation");

CALC.factorymethod.AddOperation = (function() {
	
	let AddOperator = CALC.factorymethod.AddOperator;
	
	let AbstractOperation = CALC.factorymethod.AbstractOperation;
	
	class AddOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator() {
			return new AddOperator();
		}
		
		toString() {
			return "AddOperation";
		}
		
	}
	
	return AddOperation;
	
}());
