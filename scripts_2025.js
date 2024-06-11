document.addEventListener('DOMContentLoaded', () => {
    const cycloneData2025 = [
        {
            name: 'Goni',
            formed: '2025-04-10',
            dissipated: '2025-04-18',
            maxWinds: '250 km/h',
            areasAffected: 'Southern Regions',
            image: 'path_to_goni_image.jpg'
        },
        {
            name: 'Haishen',
            formed: '2025-06-20',
            dissipated: '2025-06-30',
            maxWinds: '230 km/h',
            areasAffected: 'Central and Northern Areas',
            image: 'path_to_haishen_image.jpg'
        },
        {
            name: 'Molave',
            formed: '2025-08-01',
            dissipated: '2025-08-07',
            maxWinds: '210 km/h',
            areasAffected: 'Eastern Regions',
            image: 'path_to_molave_image.jpg'
        }
    ];

    const tableBody2025 = document.getElementById('cyclone-table-body-2025');

    cycloneData2025.forEach(cyclone => {
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

        tableBody2025.appendChild(row);
    });
});

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}