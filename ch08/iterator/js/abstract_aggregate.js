CALC.createNameSpace("CALC.iterator.AbstractAggregate");

CALC.iterator.AbstractAggregate = (function() {
	
	class AbstractAggregate {
		
		constructor() {
			
		}
		
		createIterator() {
			throw new Error("You have to implement the method doSomething!");
		}
		
		toString() {
			return "AbstractAggregate";
		}
		
	}
	
	return AbstractAggregate;
	
}());
