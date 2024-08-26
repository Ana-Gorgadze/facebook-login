// script.js

document.addEventListener('DOMContentLoaded', function() {
    const btn2 = document.querySelector('.btn2');
    const createAccountDiv = document.querySelector('.createaccount');
    const facebookDiv = document.querySelector('.facebookdiv');
    const submitBtn = document.querySelector('#submit');

    btn2.addEventListener('click', function() {
        createAccountDiv.style.display = 'flex'; // Show the create account section
        facebookDiv.classList.add('blur'); // Apply blur to the facebookdiv
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        createAccountDiv.style.display = 'none'; // Hide the create account section
        facebookDiv.classList.remove('blur'); // Remove the blur effect from facebookdiv
        document.body.style.overflow = 'auto'; // Allow scrolling again
    });
});
