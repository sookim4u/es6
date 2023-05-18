CALC.createNameSpace("CALC.iterator.OperationIterator");

CALC.iterator.OperationIterator = (function() {
	
	let ICalcIterator = CALC.iterator.ICalcIterator;
	
	class OperationIterator extends ICalcIterator {
		
		constructor(operationAggregate) {
			super();
			
			this.operationAggregate = operationAggregate;
			this.index = 0;
		}
		
		hasNext() {
			if (this.index < this.operationAggregate.getSize()) {
				return true;
			} 
			else {
				return false;
			}
		}
		
		next() {
			let operation = this.operationAggregate.getOperationAt(this.index);
			this.index++;
	
			return operation;
		}
		
		toString() {
			return "OperationIterator";
		}
		
	}
	
	return OperationIterator;
	
}());
