CALC.createNameSpace("CALC.factorymethod.DivideOperation");

CALC.factorymethod.DivideOperation = (function() {
	
	let DivideOperator = CALC.factorymethod.DivideOperator;
	
	let AbstractOperation = CALC.factorymethod.AbstractOperation;
	
	class DivideOperation extends AbstractOperation {
		
		constructor() {
			super();
		}
	
		getOperator() {
			return new DivideOperator();
		}
		
		toString() {
			return "DivideOperation";
		}
		
	}
	
	return DivideOperation;
	
}());
