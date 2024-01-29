export const treeData = [
    {
        id: 'country-1',
        name: 'United States', // Replace with an actual country name
        children: [
            {
                id: 'province-1',
                name: 'California', // Replace with an actual province name
                children: [
                    { id: 'city-1-1', name: 'Los Angeles' }, // Replace with actual city names
                    { id: 'city-1-2', name: 'San Francisco' }
                ]
            },
            {
                id: 'province-2',
                name: 'Washington',
                children: [
                    { id: 'city-2-1', name: 'Seattle' }
                ]
            },
            {
                id: 'province-3',
                name: 'Utah',
                children: []
            }
        ]
    },
    // Add more countries as needed
];
