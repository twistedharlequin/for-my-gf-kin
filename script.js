function openBox() {
    const giftBox = document.getElementById('giftBox');
    const surpriseSound = document.getElementById('surpriseSound'); // Ambil elemen audio

    // 1. Tambahkan kelas 'shake' untuk efek bergetar
    giftBox.classList.add('shake');
    
    // 2. Setelah bergetar (sekitar 0.5 detik), buka kotak dan tampilkan konten
    setTimeout(() => {
        // Hapus kelas 'shake' dan tambahkan kelas 'open' untuk membuka tutupnya
        giftBox.classList.remove('shake');
        giftBox.classList.add('open');
        
        // 3. Putar sound effect saat kotak terbuka
        if (surpriseSound) {
            surpriseSound.play();
        }

        // 4. Tampilkan konten kejutan setelah tutup kotak terbuka sedikit (misalnya 0.3 detik setelah membuka)
        setTimeout(() => {
            // Konten kejutan akan muncul berkat CSS transition pada selector '.gift-box.open + .surprise-content'
            // Animasi 'incoming-animation' di dalam surprise-content akan berjalan secara otomatis
            // karena elemennya sudah menjadi 'visible'
        }, 300); // Penundaan 300ms setelah tutup mulai terbuka

    }, 500); // Durasi shaking
}
