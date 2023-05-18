CALC.createNameSpace("CALC.chain.AbstractOperationHandler");

CALC.chain.AbstractOperationHandler = (function() {
	
	class AbstractOperationHandler {
		
		constructor(operator) {
			this.operator = operator;
			this.next = null;
		}
		
		setNext(next) {
			this.next = next;
			return next;
		}
	
		handleRequest(request) {
			if (this.resolve(request)) {
				let result = this.operate(request);
				return result;
			} 
			else if (this.next != null) {
				return this.next.handleRequest(request);
			} 
			else {
				this.handleFail(request);
				return 0;
			}
		}
	
		handleFail(request) {
			console.log("fail");
		}
		
		getOperator() {
			return this.operator;
		}
		
		operate(request) {
			throw new Error("You have to implement the method doSomething!");
		}
		
		resolve(request) {
			if (request.getExpression().indexOf(this.getOperator()) >= 0) {
				return true;
			}
	
			return false;
		}
		
		toString() {
			return "AbstractOperationHandler";
		}
		
	}
	
	return AbstractOperationHandler;
	
}());
