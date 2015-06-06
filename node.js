var Node = function(){
  this.children = []; 
  this.modelView = mat4.identity(mat4.create());
};

Node.prototype.getChildren = function(){
  return this.children;
};

Node.prototype.addChild = function(node){
  this.children.push(node);
};

Node.prototype.draw = function(){
	
};
