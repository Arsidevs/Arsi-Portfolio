const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved mode
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i> Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submit

    let formData = new FormData(this);

    fetch('../php/send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if(data.toLowerCase().includes('message sent')) {
            Swal.fire({
                icon: 'success',
                title: 'Sent!',
                text: 'Your message has been sent successfully.'
            });
            this.reset(); // clear form
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data
            });
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong. Please try again later.'
        });
        console.error('Error:', error);
    });
});
