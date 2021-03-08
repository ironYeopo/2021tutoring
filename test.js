class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// function makeTree(...values) {    
//     nodes = []
//     currNode = 0
//     isLeft = true
//     console.log(values)
//     for (let i=0; i < values.length; ++i) {
//         console.log(nodes)
//         console.log(i, currNode)
//         if (i === 0) {
//             nodes.push(new TreeNode(values[i], null, null))
//         }
//         else {
//             const node = new TreeNode(values[i], null, null);
//             nodes.push(node);
//             if (isLeft) {
//                 nodes[currNode].left = new TreeNode(values[i], null, null)
//                 isLeft = false;
//             } else {
//                 nodes[currNode].right = new TreeNode(values[i], null, null)
//                 currNode++;
//                 isLeft = true;
//             } 
//         }
        
//     }
//     return nodes[0]
// }

// const head = makeTree(1,2,3,4,5)
// console.log(head.left)

// input : Tree and a number x
// output: x 가 트리안에 있으면 true 아니면 false

function findX(head, x) {
    if (head === null) return false;

    return head.value === x || findX(head.left, x) || findX(head.right, x)
}

function increaseX(head, x) {
    if (head === null) return;
    head.value += x;
    increaseX(head.left, x)
    increaseX(head.right, x)
}

let node5 = new TreeNode(5, null, null)
let node4 = new TreeNode(4, null, null)
let node3 = new TreeNode(3, null, null)
let node2 = new TreeNode(2, node4, node5)
let node1 = new TreeNode(1, node2, node3)

console.log(findX(node1, 3))

console.log(findX(node1, 6))

increaseX(node1, 5)
console.log(node1)


function readPreorder(head) {
    if (head === null) {
        return;
    }
    console.log(head.value)
    readPreorder(head.left)
    readPreorder(head.right)
}

readPreorder(node1)


function inOrder(head)
{
    if (head === null) return;
    inOrder(head.left)
    console.log(head.value)
    inOrder(head.right)

}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

let n5 = new Node(5, null);
let n4 = new Node(4, n5);
let n3 = new Node(3, n4);
let n2 = new Node(2, n3);
let n1 = new Node(1, n2);

function printList(list) {
    while(list) {
        console.log(list.value)
        list = list.next
    }
}

function printRe(list)
{
    if (list === null) return;
    console.log(list.value)
    printRe(list.next)
}
printList(n1)
printRe(n1)

function addTree(head)
{
    if (head === null) return 0;
    return addTree(head.left) + addTree(head.right) + head.value;
    
}
console.log(addTree(node1));

//test code
//test code2