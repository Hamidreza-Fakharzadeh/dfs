//dfs practice
class Nodes {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Nodes(3);
const b = new Nodes(2);
const c = new Nodes(7);
const d = new Nodes(4);
const e = new Nodes(-2);
const f = new Nodes(5);

//      3
//     / \
//    2   7
//   / \   \
//  4   -2   5

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
     if(root === null) return 0;
     return sumTree(root.left) + root.val + sumTree(root.right);

}
sumTree(a);
