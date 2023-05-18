CALC.createNameSpace("CALC.flyweight.Client");

CALC.flyweight.Client = (function() {
	
	class Client {
		
		constructor() {
			
		}
		
		setupTextStyleFlyweightFactory() {
			let TextStyleFlywieightFactory = CALC.flyweight.TextStyleFlywieightFactory;
			let FlyweightConstants = CALC.flyweight.FlyweightConstants;
			let TextStyleFlywieight = CALC.flyweight.TextStyleFlywieight;
			
			let textStyleFlywieightFactory = TextStyleFlywieightFactory.getInstance();
	
			let name = FlyweightConstants.NUMBER_STYLE_NAME;
			let textStyle = new TextStyleFlywieight(FlyweightConstants.DEFAULT_NUMBER_FONT_INFO, "red");
			textStyleFlywieightFactory.putTextStyleFlywieight(name, textStyle);
			
			name = FlyweightConstants.ANSWER_STYLE_NAME;
			textStyle = new TextStyleFlywieight(FlyweightConstants.DEFAULT_ANSWER_FONT_INFO, "black");
			textStyleFlywieightFactory.putTextStyleFlywieight(name, textStyle);
		}
		
		toString() {
				return "Client";
		}
		
	}
	
	return Client;
	
}());
