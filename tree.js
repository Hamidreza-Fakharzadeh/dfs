class Nodes {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Nodes('a');
const b = new Nodes('b');
const c = new Nodes('c');
const d = new Nodes('d');
const e = new Nodes('e');
const f = new Nodes('f');

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

const deptFirstLog = (root) => {
	const stack = [ root ];
	while (stack.length > 0) {
		const curr = stack.pop();
            console.log(curr.val);
		if (curr.left !== null) {
			stack.push(curr.left);
		}
		if (curr.right !== null) {
			stack.push(curr.right);
		}
	}
};

deptFirstLog(a);
