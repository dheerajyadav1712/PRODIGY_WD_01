// Function to display the detailed plan when the button is clicked
function showDetails(plan) {
    // Hide all detailed plan sections
    document.getElementById('beginner-plan').style.display = 'none';
    document.getElementById('intermediate-plan').style.display = 'none';
    document.getElementById('advanced-plan').style.display = 'none';
    
    // Display the clicked plan's detailed section
    document.getElementById(plan + '-plan').style.display = 'block';
}
