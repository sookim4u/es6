GAME.createNameSpace("GAME.model.sprite.AbstractCompositeSprite");

GAME.model.sprite.AbstractCompositeSprite = (function() {
	
	let AbstractSprite = GAME.model.sprite.AbstractSprite;
	
	class AbstractCompositeSprite extends AbstractSprite {
		
		constructor() {
			super();
			
			this.sprites = [];
		}

		addSprite(sprite){
			this.sprites.push(sprite);
		}

		draw(ctx){
			for(let sprite of this.sprites){
				sprite.draw(ctx);
			}		
		}

		setAlpha(alpha) {
			for(let sprite of this.sprites){
				sprite.setAlpha(alpha);
			}		
		}

		drawSprite(ctx) {
			
		}

		getHeight() {
			let minY = Number.MAX_VALUE;
			let maxY = 0;
			
			let y = 0;
			let height = 0;
			
			for(let sprite of this.sprites){
				y = sprite.getY();
				
				height = sprite.getHeight();
				
				if(minY > y){
					minY = y;
				}
				
				if(maxY < y + height){
					maxY = y + height;
				}
			}		
			
			return maxY - minY;
		}

		getWidth() {
			let minX = Number.MAX_VALUE;
			let maxX = 0;
			
			let x = 0;
			let width = 0;
			
			for(let sprite of this.sprites){
				x = sprite.getX();
				
				width = sprite.getWidth();
				
				if(minX > x){
					minX = x;
				}
				
				if(maxX < x + width){
					maxX = x + width;
				}
			}		
			
			return maxX - minX;
		}
		
		toString() {
			return "AbstractCompositeSprite";
		}
		
	}
	
	return AbstractCompositeSprite;
	
}());
