const signUpFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to sign up');
        }
    }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signUpFormHandler);