// script.js - Fungsi Interaksi + Musik Gamelan

function tampilkanDetail() {
    const header = document.querySelector('header');
    const namaWebsite = document.getElementById('nama-website');
    const tagline = document.querySelector('.tagline');
    const kontenDetail = document.getElementById('konten-detail');
    const loadingIndicator = document.getElementById('loading-indicator');
    const gamelanAudio = document.getElementById('gamelan-audio');

    // Cek apakah konten sudah tampil
    if (kontenDetail.classList.contains('tersembunyi')) {
        
        // 1. Ubah tampilan header (mengecil)
        header.style.padding = '20px';
        namaWebsite.style.fontSize = '1.5em';
        tagline.style.display = 'none';

        // 2. Tampilkan Loading Indicator
        loadingIndicator.classList.add('active');
        
        // 3. Pastikan musik mulai diputar (penting karena browser sering memblokir autoplay)
        if (gamelanAudio) {
            gamelanAudio.play().catch(error => {
                console.log("Autoplay Gamelan diblokir. Pengguna harus berinteraksi.");
                // Opsi: Tampilkan tombol play
            });
        }
        
        // 4. Simulasikan proses loading selama 1 detik (1000ms)
        setTimeout(() => {
            
            // Sembunyikan Loading Indicator
            loadingIndicator.classList.remove('active');
            
            // Tampilkan Konten Detail
            kontenDetail.classList.remove('tersembunyi');
            
            // Scroll ke bagian konten detail setelah loading selesai
            kontenDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
        }, 1000); // Durasi delay 1 detik
    }
}