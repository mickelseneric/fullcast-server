const treeData = [
    {
        id: '2230db1f-d5a6-4d9b-bd18-6084d68f2af1',
        name: 'United States', // Replace with an actual country name
        nodes: [
            {
                id: 'caa684e2-172e-452b-aac7-64d9934f2476',
                name: 'California', // Replace with an actual province name
                nodes: [
                    { id: '460c8cdc-2026-404b-96ab-57b7ed7f686c', name: 'Los Angeles' }, // Replace with actual city names
                    { id: '48f0b92b-0af3-4b7f-83c8-4b94f6e922a7', name: 'San Francisco' }
                ]
            },
            {
                id: '03588726-985a-49fe-bb7b-d5f13a07af5f',
                name: 'Washington',
                nodes: [
                    { id: '645425c9-de02-4830-bcc6-ac777cc1beb8', name: 'Seattle' }
                ]
            },
            {
                id: 'd6b578e1-8fe0-4903-a6eb-e500e1f2244e',
                name: 'Utah',
                nodes: []
            }
        ]
    }
];

module.exports = treeData;