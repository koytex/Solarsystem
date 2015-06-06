var Cube = function(size) {
	size = size/2;
	
	// positions
	var v1 = vec3.create();
    vec3.set(v1, -size, size, -size);

    var v2 = vec3.create();
    vec3.set(v2, -size, -size, -size);

    var v3 = vec3.create();
    vec3.set(v3, size, -size, -size);
	
	var v4 = vec3.create();
	vec3.set(v4, size, size, -size);
	
	var v5 = vec3.create();
	vec3.set(v5, -size, size, size);
	
	var v6 = vec3.create();
	vec3.set(v6, -size, -size, size);
	
	var v7 = vec3.create();
	vec3.set(v7, size, -size, size);
	
	var v8 = vec3.create();
	vec3.set(v8, size, size, size);


	// color
	var c1 = vec3.create();
	vec3.set(c1, 0.0, 0.0, 1.0);

	var c2 = vec3.create();
	vec3.set(c2, 0.0, 1.0, 0.0);

	var c3 = vec3.create();
	vec3.set(c3, 0.0, 1.0, 1.0);

	var c4 = vec3.create();
	vec3.set(c4, 1.0, 0.0, 0.0);

	var c5 = vec3.create();
	vec3.set(c5, 1.0, 0.0, 1.0);

	var c6 = vec3.create();
	vec3.set(c6, 1.0, 1.0, 0.0);
	
	this.north = new Quad(v2,v6,v7,v3,c1);
	this.east = new Quad(v3,v7,v8,v4,c2);
	this.south = new Quad(v1,v4,v8,v5,c3);
	this.west = new Quad(v1,v5,v6,v2,c4);
	this.top = new Quad(v1,v2,v3,v4,c5);
	this.bottom = new Quad(v8,v7,v6,v5,c6);

	this.initBuffers();
};

Cube.prototype.initBuffers = function() {
	this.north.initBuffers();
	this.east.initBuffers();
	this.south.initBuffers();
	this.west.initBuffers();
	this.top.initBuffers();
	this.bottom.initBuffers();
};

Cube.prototype.draw = function() {
	this.north.draw();
	this.east.draw();
	this.south.draw();
	this.west.draw();
	this.top.draw();
	this.bottom.draw();
};
