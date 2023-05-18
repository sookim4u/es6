CALC.createNameSpace("CALC.factorymethod.SubstractOperation");

CALC.factorymethod.SubstractOperation = (function() {
	
	let SubstractOperator = CALC.factorymethod.SubstractOperator;
	
	let AbstractOperation = CALC.factorymethod.AbstractOperation;
	
	class SubstractOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator() {
			return new SubstractOperator();
		}
		
		toString() {
			return "SubstractOperation";
		}
		
	}
	
	return SubstractOperation;
	
}());
