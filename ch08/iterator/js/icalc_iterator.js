CALC.createNameSpace("CALC.iterator.ICalcIterator");

CALC.iterator.ICalcIterator = (function() {
	
	class ICalcIterator {
		
		constructor() {
			
		}
		
		hasNext() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		next() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "ICalcIterator";
		}
		
	}
	
	return ICalcIterator;
	
}());
