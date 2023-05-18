CALC.createNameSpace("CALC.adapter.OperationAdaptee");

CALC.adapter.OperationAdaptee = (function() {
	
	class OperationAdaptee {
		
		constructor() {
			
		}
		
		calculate(operatorType, firstNumber, secondNumber) {
			switch (operatorType) {
				case OperationAdaptee.ADD_OPERATION:
					return firstNumber + secondNumber;
				case OperationAdaptee.SUBSTRACT_OPERATION:
					return firstNumber - secondNumber;
				case OperationAdaptee.MULTIPLY_OPERATION:
					return firstNumber * secondNumber;
				case OperationAdaptee.DIVIDE_OPERATION:
					return firstNumber / secondNumber;
			}
	
			return 0;
		}
		
		toString() {
			return "OperationAdaptee";
		}
		
	}
	
	OperationAdaptee.ADD_OPERATION = 1;
	OperationAdaptee.SUBSTRACT_OPERATION = 2;
	OperationAdaptee.MULTIPLY_OPERATION = 3;
	OperationAdaptee.DIVIDE_OPERATION = 4;
	
	return OperationAdaptee;
	
}());
