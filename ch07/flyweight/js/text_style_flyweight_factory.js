CALC.createNameSpace("CALC.flyweight.TextStyleFlywieightFactory");

CALC.flyweight.TextStyleFlywieightFactory = (function() {
	
	class TextStyleFlywieightFactory {
		
		constructor() {
			if(TextStyleFlywieightFactory._instance) {
				return TextStyleFlywieightFactory._instance;
			}
			
			TextStyleFlywieightFactory._instance = this;
			
			this.pool = new Map();
		}
		
		static getInstance() {
			if (!TextStyleFlywieightFactory._instance) {
				TextStyleFlywieightFactory._instance = new TextStyleFlywieightFactory();
			}
			
			return TextStyleFlywieightFactory._instance;
		}
		
		getTextStyleFlywieight(name) {
			let textStyle = this.pool.get(name);
			return textStyle;
		}
		
		putTextStyleFlywieight(name, textStyle) {
			this.pool.set(name, textStyle);
		} 
		
		toString() {
			return "TextStyleFlywieightFactory";
		}
		
	}
	
	return TextStyleFlywieightFactory;
	
}());
