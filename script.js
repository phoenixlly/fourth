document.addEventListener('DOMContentLoaded', () => {
    const cycloneData = [
        {
            name: 'Aere',
            formed: '2027-06-05',
            dissipated: '2027-06-10',
            maxWinds: '150 km/h',
            areasAffected: 'Coastal Areas',
            image: 'path_to_aere_image.jpg'
        },
        {
            name: 'Mindulle',
            formed: '2027-08-15',
            dissipated: '2027-08-23',
            maxWinds: '180 km/h',
            areasAffected: 'Inland and Coastal Areas',
            image: 'path_to_mindulle_image.jpg'
        },
        {
            name: 'Chanthu',
            formed: '2027-09-01',
            dissipated: '2027-09-07',
            maxWinds: '220 km/h',
            areasAffected: 'Northern Regions',
            image: 'path_to_chanthu_image.jpg'
        }
    ];

    const tableBody = document.getElementById('cyclone-table-body');

    cycloneData.forEach(cyclone => {
        const row = document.createElement('tr');

        Object.values(cyclone).forEach((value, index) => {
            const cell = document.createElement('td');
            if (index === Object.values(cyclone).length - 1) {
                const img = document.createElement('img');
                img.src = value;
                img.alt = cyclone.name;
                img.style.width = '100px';
                cell.appendChild(img);
            } else {
                cell.textContent = value;
            }
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}