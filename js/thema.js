const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.trail');
let timeout; // Variabel untuk menyimpan timeout
let isVisible = true; // Status untuk menampilkan atau menyembunyikan cursor dan trail

function updateCursorPosition(x, y) {
    // Atur posisi cursor
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    // Atur posisi trail
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;

    // Tampilkan trail dengan efek fade-in
    trail.style.opacity = 1;
    trail.style.transform = 'translate(-50%, -50%) scale(1)'; // Besar saat muncul

    // Hapus timeout sebelumnya jika ada
    clearTimeout(timeout);

    // Setelah 300ms, sembunyikan trail
    timeout = setTimeout(() => {
        trail.style.opacity = 0;
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Kembali ke ukuran kecil
    }, 300); // Durasi trail terlihat
}

// Event untuk touchmove
document.addEventListener('touchmove', (event) => {
    if (isVisible) {
        const touch = event.touches[0]; // Ambil titik sentuh pertama
        updateCursorPosition(touch.clientX, touch.clientY);
    }
});

// Event untuk touchstart
document.addEventListener('touchstart', (event) => {
    if (isVisible) {
        const touch = event.touches[0]; // Ambil titik sentuh pertama
        updateCursorPosition(touch.clientX, touch.clientY);
    }
});

// Event untuk mousemove
document.addEventListener('mousemove', (event) => {
    if (isVisible) {
        updateCursorPosition(event.clientX, event.clientY);
    }
});

// Event untuk mousedown
document.addEventListener('mousedown', (event) => {
    if (isVisible) {
        updateCursorPosition(event.clientX, event.clientY);
    }
});

// Event untuk touchend dan mouseup
document.addEventListener('touchend', () => {
    if (isVisible) {
        trail.style.opacity = 0;
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Kembali ke ukuran kecil
    }
});

document.addEventListener('mouseup', () => {
    if (isVisible) {
        trail.style.opacity = 0;
        trail.style.transform = 'translate(-50%, -50%) scale(0.5)'; // Kembali ke ukuran kecil
    }
});

// Event untuk double click
document.addEventListener('dblclick', () => {
    isVisible = !isVisible; // Toggle status tampil/tersembunyi

    // Menampilkan atau menyembunyikan cursor dan trail
    if (isVisible) {
        cursor.style.display = 'block';
        trail.style.display = 'block';
    } else {
        cursor.style.display = 'none';
        trail.style.display = 'none';
    }
});
