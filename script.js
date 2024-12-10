// script.js

document.getElementById('complaintForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const table = document.getElementById('complaintTable').querySelector('tbody');
  
    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${issue}</td>
      <td><span class="status pending">Pending</span></td>
    `;
  
    // Reset form
    this.reset();
  });
  
  // Simulate status change
  setInterval(() => {
    const statuses = document.querySelectorAll('.status.pending');
    if (statuses.length > 0) {
      statuses[0].classList.remove('pending');
      statuses[0].classList.add('completed');
      statuses[0].textContent = 'Completed';
    }
  }, 5000);
  