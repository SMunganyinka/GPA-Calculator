// Array to hold all assignment entries
const assignments = [];

/**
 * Adds a new assignment to the array.
 * @param {string} name - Name of the assignment.
 * @param {number} grade - Grade (0 to 5 scale).
 */
function addAssignment(name, grade) {
  assignments.push({ name, grade });
}

/**
 * Calculates the current GPA based on all assignments.
 * @returns {number} - GPA out of 5.
 */
function calculateGPA() {
  if (assignments.length === 0) return 0;
  const total = assignments.reduce((sum, a) => sum + a.grade, 0);
  return total / assignments.length;
}

/**
 * Gets all assignments (for display or export).
 * @returns {Array} - Array of assignment objects.
 */
function getAssignments() {
  return assignments;
}

// Export functions so they can be called from elsewhere
export { addAssignment, calculateGPA, getAssignments };
