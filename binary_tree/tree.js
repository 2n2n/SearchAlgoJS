function Node (value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// kung given ang left sa right sya, kung given ang right, sa left sya ng left
Node.prototype = {
    insertLeft: function(value) {
        this.left = new Node(value);
    },
    insertRight: function(value) {
        this.right = new Node(value);
    },
    search: function(value) {
        if( value < this.value ) {
            if( this.left !== null ) {
                if ( this.right === null ) {
                    this.insertRight(value);
                }
                else {
                    this.left.search(value);
                }
            }
            else {
                this.insertLeft(value);
            }
        }
        else {
            if( this.right !== null ) {
                this.right.search(value);
            }
            else {
                this.insertRight(value);
            }
        }
    }
}

var n = new Node("j"); // l
n.search("f");
n.search("k");
n.search("a");
n.search("h");
n.search("z");


console.log(JSON.parse(JSON.stringify(n)));