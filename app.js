const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const service = require('./service');

const app = express();
const port = 3001; // You can choose any available port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/tree/nodes', async (req, res) => {
    const treeData = await service.getNodes();
    res.json(treeData);
});

app.post('/tree/nodes', async (req, res) => {
    const body = req.body;
    if (!body.node) {
        return res.status(400).send('Missing node data');
    }

    try {
        const node = await service.addNode(body.parentId, body.node);
        res.status(201).send(node);
    } catch (e) {
        res.send(e.message);
    }
});

app.delete('/tree/nodes/:id', async (req, res) => {
    const nodeId = req.params.id;

    if (!nodeId)
        return res.status(200).send({ id: nodeId });

    try {
        await service.removeNode(nodeId);
        res.status(200).send({ id: nodeId });
    } catch (e) {
        res.send(e.message);
    }
});

app.put('/tree/nodes/:id', async (req, res) => {
    const nodeId = req.params.id;
    const newNodeData = req.body;

    if (!nodeId)
        return res.status(400).send({ message: 'Missing node id' });
    if (!newNodeData)
        return res.status(400).send({ message: 'Missing node data' });

    try {
        const updatedNode = await service.updateNode(nodeId, newNodeData);
        res.status(200).send(updatedNode);
    } catch (e) {
        res.send(e.message);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
