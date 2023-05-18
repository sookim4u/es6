CALC.createNameSpace("CALC.app.CalcMainFrame");

CALC.app.CalcMainFrame = (function() {
	
	class CalcMainFrame {
		
		constructor(calculatorDivId) {
			let calculator = document.getElementById(calculatorDivId);
			
			let equationCanvas = document.createElement("canvas");
			let displayCanvas = document.createElement("canvas");
			let div1 = document.createElement("div");
			let div2 = document.createElement("div");
			let panel1 = document.createElement("div");
			let panel2 = document.createElement("div");
			let panel3 = document.createElement("div");
			let panel4 = document.createElement("div");
			let panel5 = document.createElement("div");
			let panel6 = document.createElement("div");
		
			div1.appendChild(equationCanvas);
			div2.appendChild(displayCanvas);
			calculator.appendChild(div1);
			calculator.appendChild(div2);
			calculator.appendChild(panel1);
			calculator.appendChild(panel2);
			calculator.appendChild(panel3);
			calculator.appendChild(panel4);
			calculator.appendChild(panel5);
			calculator.appendChild(panel6);
			
			let displayView = new CALC.app.CalcDisplayView(displayCanvas);
			let equationView = new CALC.app.CalcEquationView(equationCanvas);
			
			let inputPanel1 = new CALC.app.InputPanel();
			inputPanel1.initLayout(["%", "SQRT", "POW", "FRAC"], panel1);
			
			let inputPanel2 = new CALC.app.InputPanel();
			inputPanel2.initLayout(["CE", "C", "BACK", "/"], panel2);
			
			let inputPanel3 = new CALC.app.InputPanel();
			inputPanel3.initLayout(["7", "8", "9", "*"], panel3);
			
			let inputPanel4 = new CALC.app.InputPanel();
			inputPanel4.initLayout(["4", "5", "6", "-"], panel4);
			
			let inputPanel5 = new CALC.app.InputPanel();
			inputPanel5.initLayout(["1", "2", "3", "+"], panel5);
			
			let inputPanel6 = new CALC.app.InputPanel();
			inputPanel6.initLayout(["+-", "0", ".", "="], panel6);
		}
		
		toString() {
			return "CalcMainFrame";
		}
		
	}
	
	return CalcMainFrame;
	
}());
