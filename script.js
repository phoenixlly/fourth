document.addEventListener('DOMContentLoaded', () => {
    const cycloneData = [
        // Add cyclone data here
    ];

    const tableBody = document.getElementById('cyclone-table-body');
    if (tableBody) {
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
    }

    // Ensure the introduction content is visible initially
    toggleSection('introduction-content');
});

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}