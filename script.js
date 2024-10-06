function cekKhodam() {
    const nameInput = document.getElementById('nameInput').value;
    if (!nameInput) {
        Swal.fire({
            title: 'JANGAN DI KOSONG LEK!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        return;
    }
    document.getElementById('loading').style.display = 'block'; 
    setTimeout(() => {
        const khodams = [
{ name: "Kuntilanak Putih", meaning: "Kamu mampu menyebarkan kengerian dengan suara tangisan yang memilukan." },
{ name: "Genderuwo Sakti", meaning: "Kekuatanmu mampu mengganggu pikiran manusia dengan bisikan-bisikan." },
{ name: "Sundel Bolong Penggoda", meaning: "Pesonamu dapat memikat korban ke dalam perangkap maut." },
{ name: "Tuyul Pencuri", meaning: "Kamu ahli dalam mengambil harta benda tanpa terlihat." },
{ name: "Pocong Melompat", meaning: "Kemampuanmu untuk muncul tiba-tiba membuat orang terkejut dan ketakutan." },
{ name: "Banaspati Api", meaning: "Kamu bisa menjelma menjadi api yang menyesatkan di malam gelap." },
{ name: "Jenglot Penghisap", meaning: "Kamu memiliki kemampuan untuk menghisap energi kehidupan." },
{ name: "Wewe Gombel Penculik", meaning: "Kamu ahli dalam menculik anak-anak yang tidak dijaga." },
{ name: "Babi Ngepet Pembawa Sial", meaning: "Wujud babimu membawa kesialan dan kerugian bagi yang melihat." },
{ name: "Leak Pembawa Wabah", meaning: "Kamu bisa menyebarkan penyakit dan malapetaka." },
{ name: "Kuyang Pencabut Nyawa", meaning: "Kamu memiliki kemampuan untuk mencabut nyawa dalam kegelapan." },
{ name: "Pesugihan Babi", meaning: "Kamu bisa memberikan kekayaan dengan bayaran yang mengerikan." },
{ name: "Nyi Roro Kidul Penguasa", meaning: "Kekuatanmu atas laut selatan tak tertandingi." },
{ name: "Jin Penunggu Pohon", meaning: "Kamu menjaga pohon keramat dan menghukum yang berani mengganggu." },
{ name: "Setan Gundul Penjaga Harta", meaning: "Kamu menjaga harta karun tersembunyi dengan kekuatan gaib." },
{ name: "Hantu Jeruk Purut", meaning: "Wajah mengerikanmu membuat siapa pun yang melihat menjadi gila." },
{ name: "Gendruwo Penunggu Sungai", meaning: "Kamu menenggelamkan mereka yang berani mengganggu sungaimu." },
{ name: "Siluman Macan", meaning: "Wujud macanmu membuat orang ketakutan di hutan." },
{ name: "Mbok Srini Pengirim Teluh", meaning: "Ilmu hitammu mampu mengirim penyakit dari jarak jauh." },
{ name: "Demit Kuburan", meaning: "Kamu menghantui kuburan dan menakuti siapa pun yang berani mendekat." },
{ name: "Kuntilanak Merah", meaning: "Sosokmu yang berlumuran darah membuat orang ketakutan." },
{ name: "Jailangkung Pemanggil Arwah", meaning: "Kamu bisa memanggil arwah dan menyampaikan pesan dari alam lain." },
{ name: "Sawan Bayi", meaning: "Kamu bisa membuat bayi sakit dengan sentuhan dinginmu." },
{ name: "Hantu Kereta Api", meaning: "Suara lengkinganmu menandakan kedatangan kereta hantu." },
{ name: "Ratu Pantai Selatan", meaning: "Kecantikanmu yang mematikan menarik korban ke laut dalam." },
{ name: "Buto Ijo Pemangsa", meaning: "Sosok raksasamu menimbulkan teror di desa-desa." },
{ name: "Hantu Kepala Buntung", meaning: "Penampakanmu tanpa kepala membuat orang lari ketakutan." },
{ name: "Sundel Bolong Penasaran", meaning: "Arwahmu yang penasaran terus menghantui tempat kematianmu." },
{ name: "Dedemit Sawah", meaning: "Kamu menjaga sawah dan menakuti pencuri padi." },
{ name: "Kecoak Raksasa", meaning: "Wujudmu yang menjijikkan membuat orang ketakutan dan jijik." }
];
        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        document.getElementById('khodamName').innerText = `Khodam: ${khodam.name}`;
        document.getElementById('khodamMeaning').innerText = khodam.meaning;
        document.getElementById('result').style.display = 'block';
        document.getElementById('loading').style.display = 'none'; // Sembunyikan spinner
    }, 1500); 
}

function resetForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('result').style.display = 'none';
}