CALC.createNameSpace("CALC.prototype.Client");

CALC.prototype.Client = (function() {
	
	let AddOperationPrototype = CALC.prototype.AddOperationPrototype;
	let SubstractOperationPrototype = CALC.prototype.SubstractOperationPrototype;
	let MultiplyOperationPrototype = CALC.prototype.MultiplyOperationPrototype;
	let DivideOperationPrototype = CALC.prototype.DivideOperationPrototype;
	
	class Client {
		
		constructor() {
			this.operationPrototype = null;
			this.operationPrototypeMap = {}
			
			this.initOperationMap();
		}
		
		operate() {
			this.operationPrototype.operate();
		}
		
		setOperation(operator, firstNumber, secondeNumber) {
			this.operationPrototype = this.getOperationClone(operator);
	
			this.operationPrototype.setFirstNumber(firstNumber);
			this.operationPrototype.setSecondNumber(secondeNumber);
		}
		
		initOperationMap() {
			this.operationPrototypeMap["+"] = new AddOperationPrototype();
			this.operationPrototypeMap["-"] = new SubstractOperationPrototype();
			this.operationPrototypeMap["*"] = new MultiplyOperationPrototype();
			this.operationPrototypeMap["/"] = new DivideOperationPrototype();
		}
		
		getOperationClone(operator) {
			let operation = this.operationPrototypeMap[operator];
			return operation.getClone();
		}
		
		toString() {
			return "Client";
		}
		
	}
	
	return Client;
	
}());
