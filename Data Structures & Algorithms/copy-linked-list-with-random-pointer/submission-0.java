/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> copyNode = new HashMap<>();
        copyNode.put(null, null);

        Node current = head;

        while (current != null) {
            Node newNode = new Node(current.val);
            copyNode.put(current, newNode);
            current = current.next;
        }

        current = head;

        while (current != null) {
            Node copy = copyNode.get(current);
            copy.next = copyNode.get(current.next);
            copy.random = copyNode.get(current.random);

            current = current.next;
        }

        return copyNode.get(head);
    }
}
