function sendwa(event) {
    event.preventDefault();

    const message = "Halo, saya ingin memesan desain 3D.";
    const phoneNumber = "6285158883609"; // Ganti dengan nomor WhatsApp yang diinginkan
    const urlTowhatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Menggunakan lokasi.href untuk mengarahkan pengguna
    window.location.href = urlTowhatsapp;
}