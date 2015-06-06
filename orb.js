var Orb = function(name, durchmesser){
	Node.call(this);
	this.name = name;
	this.durchmesser = durchmesser;
	this.cube = new Cube(1.0);
	mat4.rotate(this.modelView, this.modelView, Math.random(), [0,1,0]);
}

//Inherit from Node
Orb.prototype = Object.create(Node.prototype);
Orb.prototype.constructor = Node;

//Add Functions to the Orb prototype
Orb.prototype.draw = function(logString){
	logString += this.name + " (" + this.durchmesser + ")" + ",";
	
	this.cube.draw();
	
	return logString;
}

