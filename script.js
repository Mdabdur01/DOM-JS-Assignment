const form = document.getElementById('studentForm');
        const studentRecords = document.getElementById('studentRecords');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const studentID = document.getElementById('studentID').value;
            const email = document.getElementById('email').value;
            const contact = document.getElementById('contact').value;

            const newRow = studentRecords.insertRow();
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${studentID}</td>
                <td>${email}</td>
                <td>${contact}</td>
                <td class="action-buttons">
                    <button type="button" class="reset-btn">Reset</button>
                    <button type="button" class="delete-btn">Delete</button>
                </td>
            `;

            // Add functionality for Reset button
            newRow.querySelector('.reset-btn').addEventListener('click', function() {
                newRow.cells[0].textContent = '';
                newRow.cells[1].textContent = '';
                newRow.cells[2].textContent = '';
                newRow.cells[3].textContent = '';
            });

            // Add functionality for Delete button
            newRow.querySelector('.delete-btn').addEventListener('click', function() {
                studentRecords.deleteRow(newRow.rowIndex - 1);
            });

            form.reset();
        });