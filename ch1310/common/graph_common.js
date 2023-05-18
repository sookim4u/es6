var GRAPH = GRAPH || {};

GRAPH.createNameSpace = function(nsValue) {
	let parts = nsValue.split('.'),
		parent = GRAPH,
		i;
	
	if(parts[0] === "GRAPH") {
		parts = parts.slice(1);
	}
	
	for(i = 0; i < parts.length; i += 1) {
		if(typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}
		
		parent = parent[parts[i]];
	}
	
	return parent;
}
