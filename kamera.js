// Kamera Prototype
var Kamera = function()
{
	Node.call(this);
	//this.modelViewMatrix = mat4.create();
	this.projectionMatrix = mat4.create();
	this.xRotate = 0.0;
	this.yRotate = 0.0;
	this.fovy = 45;
	this.trigger(-1);
}

//Inherit from Node
Kamera.prototype = Object.create(Node.prototype);
Kamera.prototype.constructor = Node;

Kamera.prototype.registerEvents = function() {
    document.addEventListener('keydown', function(event) { Key.keyControl(event); });

    var Key = {
        Kamera: this,
        keyControl: function (event) {
            var Kamera = this.Kamera;
            
            Kamera.trigger(event.keyCode);
        }
    }
}

Kamera.prototype.setup = function() {
	mat4.perspective(this.projectionMatrix, this.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
}

Kamera.prototype.trigger = function(code) {    
	if (37 == code) {
		console.log('links');
		this.yRotate += 0.1;
	}
	if (38 == code) {
		console.log('oben');
		this.xRotate += 0.1;
	}
	if (39 == code) {
		console.log('rechts');
		this.yRotate -= 0.1;
	}
	if (40 == code) {
		console.log('unten');
		this.xRotate -= 0.1;
	}
	if (107 == code) {
		this.fovy -= 0.1;
		mat4.perspective(this.projectionMatrix, this.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
	}
	if (109 == code) {
		this.fovy += 0.1;
		mat4.perspective(this.projectionMatrix, this.fovy, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
	}
	
	mat4.identity(this.modelViewMatrix);
    mat4.translate(this.modelViewMatrix, this.modelView, [0,0,-10]);
	
	mat4.rotate(this.modelViewMatrix, this.modelView, this.xRotate, [1,0,0]);
	mat4.rotate(this.modelViewMatrix, this.modelView, this.yRotate, [0,1,0]);
	
	//this.draw();
}

Kamera.prototype.draw = function(code)
{
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, this.projectionMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, this.modelView);
}
