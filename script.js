document.addEventListener('DOMContentLoaded', () => {
    const cycloneData = [
        {
            name: 'Aere',
            formed: '2027-06-05',
            dissipated: '2027-06-10',
            maxWinds: '150 km/h',
            areasAffected: 'Coastal Areas'
        },
        {
            name: 'Mindulle',
            formed: '2027-08-15',
            dissipated: '2027-08-23',
            maxWinds: '180 km/h',
            areasAffected: 'Inland and Coastal Areas'
        },
        {
            name: 'Chanthu',
            formed: '2027-09-01',
            dissipated: '2027-09-07',
            maxWinds: '220 km/h',
            areasAffected: 'Northern Regions'
        }
    ];

    const tableBody = document.getElementById('cyclone-table-body');

    cycloneData.forEach(cyclone => {
        const row = document.createElement('tr');

        Object.values(cyclone).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});
