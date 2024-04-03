let buku = [
    {"nama": "sherlock", "jumlah": 2},
    {"nama": "lupin", "jumlah": 2},
    {"nama": "aladin", "jumlah": 2}
];

function checkAvailability() {
    let jumlah = parseInt(document.getElementById('jumlah').value);
    let pilihan = document.getElementById('pilihan').value;

    if (isNaN(jumlah) || jumlah === 0) {
        alert('Silahkan isi jumlah buku yang ingin dipinjam.');
        return;
    }

    let bukuDitemukan = false;
    for (let i = 0; i < buku.length; i++) {
        if (buku[i].nama === pilihan) {
            bukuDitemukan = true;
            if (jumlah > buku[i].jumlah) {
                alert('Maaf, jumlah buku yang tersedia tidak mencukupi.');
            } else {
                alert('Silahkan ambil buku Anda.');
            }
            break;
        }
    }

    if (!bukuDitemukan) {
        alert('Buku tidak ditemukan.');
    }
}
