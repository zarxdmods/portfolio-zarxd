            const audio = document.querySelector("#playback");
            setTimeout(() => {
                Swal.fire({
                    title: 'Halo! 🎶',
                    text: 'Santai aja, kita muter lagu buat temenin kamu ngisi pesan!',
                    icon: 'info',
                    confirmButtonText: 'Lanjutkan',
                    allowOutsideClick: false,
                }).then(() => {
                    audio.play()
                }).catch(() => {
                    audio.play()
                })
            }, 1000);

(function() {
    emailjs.init("YOUR_USER_ID"); // Ganti dengan User ID Anda dari EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            document.getElementById('response').innerText = 'Message sent successfully!';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('response').innerText = 'Failed to send message. Please try again.';
            console.error('Error:', error);
        });
});