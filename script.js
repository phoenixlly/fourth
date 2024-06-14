document.addEventListener('DOMContentLoaded', () => {
    const cycloneData2027 = [
        {
            name: 'Aere',
            formed: '2027-05-15',
            dissipated: '2027-05-25',
            maxWinds: '260 km/h',
            areasAffected: 'Coastal Areas',
            image: 'https://raw.githubusercontent.com/phoenixlly/fourth/main/20240611_104101.png'
        },
        {
            name: 'Mindulle',
            formed: '2027-07-10',
            dissipated: '2027-07-20',
            maxWinds: '240 km/h',
            areasAffected: 'Northern Regions',
            image: 'path_to_mindulle_image.jpg'
        },
        {
            name: 'Chanthu',
            formed: '2027-09-01',
            dissipated: '2027-09-10',
            maxWinds: '270 km/h',
            areasAffected: 'Central and Southern Areas',
            image: 'path_to_chanthu_image.jpg'
        }
    ];

    const tableBody2027 = document.getElementById('cyclone-table-body');

    cycloneData2027.forEach(cyclone => {
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

        tableBody2027.appendChild(row);
    });
});

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}