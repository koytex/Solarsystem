var Quad = function(v1,v2,v3,v4,color) {
	this.triangle1 = new Triangle(v1,v2,v3,color);
	this.triangle2 = new Triangle(v3,v4,v1,color);

	this.initBuffers();
};

//Add Functions to the Triangle prototype
Quad.prototype.initBuffers = function() {
	this.triangle1.initBuffers();
	this.triangle2.initBuffers();
};

Quad.prototype.draw = function() {
	this.triangle1.draw();
	this.triangle2.draw();
};
