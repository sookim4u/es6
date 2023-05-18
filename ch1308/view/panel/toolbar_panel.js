GRAPH.createNameSpace("GRAPH.view.panel.ToolbarPanel");

GRAPH.view.panel.ToolbarPanel = (function() {
	
	class ToolbarPanel {
		
		constructor() {
			this.tfEquation = null;
			
			this.tfMinX = null;
			this.tfMaxX = null;
			this.tfTickX = null;
			
			this.tfMinY = null;
			this.tfMaxY = null;
			this.tfTickY = null;
			
			this.controller = null;
		}
		
		initLayout(toolbar) {
			let DEFAULT_INPUT_WIDTH = "120px";			 

			let td11 = document.createElement("td");
			td11.innerHTML = "X Min";
			
			let td12 = document.createElement("td");
			
			this.tfMinX = document.createElement("input");
			this.tfMinX.style.width = DEFAULT_INPUT_WIDTH;
			
			td12.appendChild(this.tfMinX);
			
			let td13 = document.createElement("td");
			td13.innerHTML = "X Max";
			
			let td14 = document.createElement("td");
			
			this.tfMaxX = document.createElement("input");
			this.tfMaxX.style.width = DEFAULT_INPUT_WIDTH;
			
			td14.appendChild(this.tfMaxX);
			
			let td15 = document.createElement("td");
			td15.innerHTML = "X Tick";
			
			let td16 = document.createElement("td");
			
			this.tfTickX = document.createElement("input");
			this.tfTickX.style.width = DEFAULT_INPUT_WIDTH;
			
			td16.appendChild(this.tfTickX);
			
			let tr1 = document.createElement("tr");
			tr1.appendChild(td11);
			tr1.appendChild(td12);
			tr1.appendChild(td13);
			tr1.appendChild(td14);
			tr1.appendChild(td15);
			tr1.appendChild(td16);
			
			let td21 = document.createElement("td");
			td21.innerHTML = "Y Min";
			
			let td22 = document.createElement("td");
			
			this.tfMinY = document.createElement("input");
			this.tfMinY.style.width = DEFAULT_INPUT_WIDTH;
			
			td22.appendChild(this.tfMinY);
			
			let td23 = document.createElement("td");
			td23.innerHTML = "Y Max";
			
			let td24 = document.createElement("td");
			
			this.tfMaxY = document.createElement("input");
			this.tfMaxY.style.width = DEFAULT_INPUT_WIDTH;
			
			td24.appendChild(this.tfMaxY);
			
			let td25 = document.createElement("td");
			td25.innerHTML = "Y Tick";
			
			let td26 = document.createElement("td");
			
			this.tfTickY = document.createElement("input");
			this.tfTickY.style.width = DEFAULT_INPUT_WIDTH;
			
			td26.appendChild(this.tfTickY);
			
			let tr2 = document.createElement("tr");
			tr2.appendChild(td21);
			tr2.appendChild(td22);
			tr2.appendChild(td23);
			tr2.appendChild(td24);
			tr2.appendChild(td25);
			tr2.appendChild(td26);
			
			let td31 = document.createElement("td");
			td31.innerHTML = "Equation";
			
			let td32 = document.createElement("td");
			td32.colSpan = "4";
			
			this.tfEquation = document.createElement("input");
			this.tfEquation.style.width = "360px";
			
			td32.appendChild(this.tfEquation);
			
			let td33 = document.createElement("td");
			td33.align = "center";
			
			let btnPlot = document.createElement("button");
			let text = document.createTextNode("Plot");
			
			btnPlot.style.width= "80px";
			btnPlot.appendChild(text);
			
			td33.appendChild(btnPlot);
			
			let tr3 = document.createElement("tr");
			tr3.appendChild(td31);
			tr3.appendChild(td32);
			tr3.appendChild(td33);
			
			let table = document.createElement("table");
			table.appendChild(tr1);
			table.appendChild(tr2);
			table.appendChild(tr3);
			
			toolbar.appendChild(table);
			
			this.tfMinX.value = "-50";
			this.tfMaxX.value = "100";
			this.tfTickX.value = "10";
			
			this.tfMinY.value = "-50";
			this.tfMaxY.value = "100";
			this.tfTickY.value = "10";
			
			this.tfEquation.value = "MUL(x,2)";
			
			let toolbarThis = this;
			
			let clickHandler = function() {
				let minXValue = parseInt(toolbarThis.tfMinX.value);
				let minYValue = parseInt(toolbarThis.tfMinY.value);

				let maxXValue = parseInt(toolbarThis.tfMaxX.value);
				let maxYValue = parseInt(toolbarThis.tfMaxY.value);

				let xTickValue = parseInt(toolbarThis.tfTickX.value);
				let yTickValue = parseInt(toolbarThis.tfTickY.value);

				let equation = toolbarThis.tfEquation.value;
				
				toolbarThis.controller.setMinXValue(minXValue);
				toolbarThis.controller.setMinYValue(minYValue);

				toolbarThis.controller.setMaxXValue(maxXValue);
				toolbarThis.controller.setMaxYValue(maxYValue);

				toolbarThis.controller.setTickXValue(xTickValue);
				toolbarThis.controller.setTickYValue(yTickValue);

				toolbarThis.controller.makePlotPoints(equation);

				toolbarThis.controller.redraw();
			};
			
			btnPlot.addEventListener("click", clickHandler, false);
		}
		
		setGraphController(graphController) {
			this.controller = graphController;
		}
		
		toString() {
			return "ToolbarPanel";
		}
		
	}
	
	return ToolbarPanel;
	
}());
