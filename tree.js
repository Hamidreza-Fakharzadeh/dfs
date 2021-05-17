class Nodes {
      constructor() {
            this.val = val;
            this.left = null;
            this.right = null;
      }
}

const a = new Nodes("a");
const b = new Nodes("b");
const c = new Nodes("c");
const d = new Nodes("d");
const e = new Nodes("e");
const f = new Nodes("f");

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


