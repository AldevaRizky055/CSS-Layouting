// scripts.js

// Function to show a message when a card is clicked
function showMessage(level) {
    const messageElement = document.getElementById('education-message');
    switch (level) {
        case 'SD':
            messageElement.textContent = 'SD: Pengalaman sekolah dasar yang menyenangkan.';
            break;
        case 'SMP':
            messageElement.textContent = 'SMP: Masa remaja yang penuh kenangan.';
            break;
        case 'SMA':
            messageElement.textContent = 'SMA: Pengalaman luar biasa di sekolah menengah.';
            break;
        case 'S1':
            messageElement.textContent = 'S1: Perjalanan seru di dunia perkuliahan.';
            break;
        default:
            messageElement.textContent = 'Klik salah satu kartu untuk melihat detail pendidikan.';
    }
    // Animasi sederhana untuk teks
    messageElement.style.opacity = '0';
    setTimeout(() => {
        messageElement.style.opacity = '1';
    }, 200);
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman
    alert('Pesan Anda telah dikirim. Terima kasih!');
    this.reset(); // Reset form setelah submit
});
