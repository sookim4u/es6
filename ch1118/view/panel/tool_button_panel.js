PAINTER.createNameSpace("PAINTER.view.panel.ToolButtonPanel");

PAINTER.view.panel.ToolButtonPanel = (function() {
	
	class ToolButtonPanel {
		
		constructor() {
			this.painterController = null;
		}
		
		initLayout() {
			let toolbar = document.getElementById("toolbar");
			
			let inputImage = this.createButton("./images/line.gif", "btnLine");
			toolbar.appendChild(inputImage);
			
			inputImage = this.createButton("./images/rectangle.gif", "btnRectangle");
			toolbar.appendChild(inputImage);
			
			inputImage = this.createButton("./images/ellipse.gif", "btnEllipse");
			toolbar.appendChild(inputImage);
			
			inputImage = this.createButton("./images/free_path.gif", "btnFreePath");
			toolbar.appendChild(inputImage);
			
			let btnLine = document.getElementById("btnLine");
			let btnRectangle = document.getElementById("btnRectangle");
			let btnEllipse = document.getElementById("btnEllipse");
			let btnFreePath = document.getElementById("btnFreePath");
			
			let painterController = this.painterController;
			
			let LineState = PAINTER.controller.state.LineState;
			let RectangleState = PAINTER.controller.state.RectangleState;
			let EllipseState = PAINTER.controller.state.EllipseState;
			let FreePathState = PAINTER.controller.state.FreePathState;
			
			btnLine.addEventListener("click", function(e) {painterController.setState(LineState.getInstance());}, false);
			btnRectangle.addEventListener("click", function(e) {painterController.setState(RectangleState.getInstance());}, false);
			btnEllipse.addEventListener("click", function(e) {painterController.setState(EllipseState.getInstance());}, false);
			btnFreePath.addEventListener("click", function(e) {painterController.setState(FreePathState.getInstance());}, false);
		}
		
		createButton(imagePath, id) {
			let inputImage = document.createElement("input");
			inputImage.setAttribute("type","image");
			inputImage.setAttribute("src",imagePath);
			inputImage.setAttribute("id",id);
			
			return inputImage;
		}
		
		setPainterController(painterController) {
			this.painterController = painterController;
		}
		
		toString() {
			return "ToolButtonPanel";
		}
		
	}
	
	return ToolButtonPanel;
	
}());
