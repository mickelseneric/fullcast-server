const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
import { treeData } from './data';

const app = express();
const port = 3001; // You can choose any available port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data structure to hold tree nodes (as an example)
let treeData = {
    nodes: treeData,
};

// Routes
app.get('/tree/nodes', (req, res) => {
    res.json(treeData);
});

app.post('/tree/nodes', (req, res) => {
    const newNode = req.body;
    // Add logic to insert newNode into treeData
    res.status(201).send(newNode);
});

app.delete('/tree/nodes/:id', (req, res) => {
    const nodeId = req.params.id;
    // Add logic to remove node by nodeId from treeData
    res.status(200).send({ id: nodeId });
});

app.put('/tree/nodes/:id', (req, res) => {
    const nodeId = req.params.id;
    const newNodeData = req.body;
    // Add logic to update node by nodeId with newNodeData in treeData
    res.status(200).send(newNodeData);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
