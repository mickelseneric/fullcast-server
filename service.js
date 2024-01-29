let treeData = require('./data');
const { v4: uuidv4 } = require('uuid');

// Helper function to find node by id recursively
const findNodeById = (nodes, id) => {
    for (const node of nodes) {
        if (node.id === id) {
            return node;
        }
        if (node.nodes) {
            const foundNode = findNodeById(node.nodes, id);
            if (foundNode) return foundNode;
        }
    }
    return null;
};

// Helper function to remove node by id recursively
const removeNodeById = (nodes, id) => {
    return nodes.filter(node => node.id !== id)
        .map(node => {
            if (node.nodes) {
                return { ...node, nodes: removeNodeById(node.nodes, id) };
            }
            return node;
        });
};

const getNodes = async () => {
    return treeData;
}

const addNode = async (parentId, node) => {
    node.id = uuidv4();

    if (parentId) {
        let parentNode;
        try {
            parentNode = findNodeById(treeData, parentId);
        } catch (e) {
            const err = new Error(`Error finding parent node with id ${parentId}`);
            err.statusCode = 500;
            throw err;
        }

        if (!parentNode) {
            const err = new Error(`Parent node with id ${parentId} not found`);
            err.status = 404;
            throw err;
        }

        // Simulating persisting new node to the database
        try {
            if (!parentNode.nodes) parentNode.nodes = [];
            if (parentNode.nodes.find(n => n.id === node.id)) {
                return node;
            }

            parentNode.nodes.push(node);
        } catch (e) {
            const err = new Error(`Error adding node ${node.name} to parent ${parentId}`);
            err.statusCode = 500;
            throw err;
        }
    } else {
        if(treeData.find(n => n.id === node.id)) {
            return node;
        }
        // Simulating persisting new node to the database
        treeData.push(node);
    }

    return node;
}

const removeNode = async (nodeId) => {
    // Simulating removing node from the database
    try {
        treeData = removeNodeById(treeData, nodeId);
    } catch (e) {
        const err = new Error(`Error removing node with id ${nodeId}`);
        err.statusCode = 500;
        throw err;
    }
}

const updateNode = async (nodeId, node) => {
    let nodeToUpdate;
    try {
        nodeToUpdate = findNodeById(treeData, nodeId);
    } catch (e) {
        const err = new Error(`Server error finding node with id ${nodeId}`);
        err.statusCode = 500;
        throw err;
    }

    if (!nodeToUpdate) {
        const err = new Error(`Node with id ${nodeId} not found`);
        err.status = 404;
        throw err;
    }

    // Simulating updating node in the database
    try {
        nodeToUpdate.name = node.name;
    } catch (e) {
        const err = new Error(`Error updating node with id ${nodeId}`);
        err.statusCode = 500;
        throw err;
    }

    return nodeToUpdate;
}

module.exports = {
    getNodes,
    addNode,
    removeNode,
    updateNode
}