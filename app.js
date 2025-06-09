// Import the functions from script.js
import { addAssignment, calculateGPA, getAssignments } from './script.js';

// Get DOM elements
const form = document.getElementById('assignment-form');
const nameInput = document.getElementById('assignment-name');
const gradeInput = document.getElementById('assignment-grade');
const gpaDisplay = document.getElementById('gpa-value');
const assignmentList = document.getElementById('assignment-list');

// Update the GPA display and assignment list
function updateDisplay() {
    // Update GPA
    const gpa = calculateGPA();
    gpaDisplay.textContent = gpa.toFixed(2);

    // Update assignment list
    assignmentList.innerHTML = '';
    const assignments = getAssignments();
    assignments.forEach(assignment => {
        const li = document.createElement('li');
        li.textContent = `${assignment.name}: ${assignment.grade}`;
        assignmentList.appendChild(li);
    });
}

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = nameInput.value;
    const grade = parseFloat(gradeInput.value);
    
    // Add the assignment
    addAssignment(name, grade);
    
    // Clear the form
    nameInput.value = '';
    gradeInput.value = '';
    
    // Update the display
    updateDisplay();
}); 