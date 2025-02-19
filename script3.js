// Show the registration form with selected event
function registerEvent(eventName) {
    const form = document.getElementById('registration-form');
    form.style.display = 'block';

    const eventField = document.getElementById('event');
    eventField.value = eventName;
}
