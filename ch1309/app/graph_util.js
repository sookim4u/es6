GRAPH.createNameSpace("GRAPH.app.GraphUtil");

GRAPH.app.GraphUtil = (function() {
	
	class GraphUtil {
		
		constructor() {
			
		};

		static getTextWidth(ctx, text) {
			if (GraphUtil.isInvalidText(text)) {
				return 0;
			}
			
			let textWidth = ctx.measureText(text).width;
			
			return textWidth;
		}
		
		static isInvalidText(text) {
			if (text === null || text.trim().length === 0) {
				return true;
			}
			
			return false;
		}
		
	}
	
	return GraphUtil;
	
}());
