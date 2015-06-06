var Scenegraph = function(rootNode){
    this.root = rootNode;
	this.mMatrixStack = new MatrixStack();
    this.logString = "";
};

Scenegraph.prototype.drawTraversal = function(node){
	//push
	this.mMatrixStack.push(modelViewMatrix);
	this.logString += "{";
	
	//multiply        
	//setmvMatrix     gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, this.projectionMatrix);
	this.logString = node.draw(this.logString);

	this.logString += "[";
	
	var children = node.getChildren();
	for(var c = 0; c < children.length; c++){
		this.drawTraversal(children[c]);
	}
	this.logString += "]";
    
    this.logString += "}";
	//pop
	this.mMatrixStack.pop(modelViewMatrix);
};

Scenegraph.prototype.draw = function(){
	// setze logString bei jedem neuen Zeichnen des Szenengraphen auf ""
	this.logString = "";
	
	console.log("Zeichne Szenengraph: ");

	console.log("{Knoten,[{Kind,[]}]}");
	
	this.drawTraversal(this.root);
	
	console.log(this.logString);
	console.log("Zeichnen des Szenengraphen abgeschlossen.");
}
