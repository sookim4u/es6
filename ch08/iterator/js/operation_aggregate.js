CALC.createNameSpace("CALC.iterator.OperationAggregate");

CALC.iterator.OperationAggregate = (function() {
	
	let AbstractAggregate = CALC.iterator.AbstractAggregate;
	
	class OperationAggregate extends AbstractAggregate {
		
		constructor() {
			super();
			
			this.operations = [];
		}
	
		addOperation(operation) {
			this.operations.push(operation);
		}
		
		createIterator() {
			return new CALC.iterator.OperationIterator(this);
		}
		
		getOperationAt(index) {
			return this.operations[index];
		}
		
		getSize() {
			return this.operations.length;
		}
		
		toString() {
			return "OperationAggregate";
		}
		
	}
	
	return OperationAggregate;
	
}());
