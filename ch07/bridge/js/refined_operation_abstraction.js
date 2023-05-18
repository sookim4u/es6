CALC.createNameSpace("CALC.bridge.RefinedOperationAbstraction");

CALC.bridge.RefinedOperationAbstraction = (function() {
	
	let OperationAbstraction = CALC.bridge.OperationAbstraction;
	
	class RefinedOperationAbstraction extends OperationAbstraction {
		
		constructor(impl) {
			super(impl);
		}
	
		sqrt(a) {
			return Math.sqrt(a);
		}
		
		pow(a, b) {
			return Math.pow(a, b);
		}
		
		toString() {
			return "RefinedOperationAbstraction";
		}
		
	}
	
	return RefinedOperationAbstraction;
	
}());
