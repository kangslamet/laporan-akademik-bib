let data = [];

// Ambil data dari Google Spreadsheet CSV
Papa.parse(csvUrl, {
  download: true,
  header: true,
  complete: function (results) {
    data = results.data;
  },
});

// Fungsi pencarian berdasarkan NIM
function cariData() {
  const input = document.getElementById("searchInput").value.trim();
  const hasilDiv = document.getElementById("hasil");

  const hasil = data.find((item) => item["NIM"]?.trim() === input);

  if (hasil) {
    hasilDiv.innerHTML = `
      <h3 style="color: #28a745;">Data Ditemukan</h3>
      <p><strong>Nama Lengkap:</strong> ${hasil["Nama Lengkap"]}</p>
      <p><strong>Tempat & Tanggal Lahir:</strong> ${hasil["Tempat & Tanggal Lahir"]}</p>
      <p><strong>Jenis Kelamin:</strong> ${hasil["Jenis Kelamin"]}</p>
      <p><strong>Nomor WA:</strong> ${hasil["Nomor WA"]}</p>
      <p><strong>Semester:</strong> ${hasil["Semester"]}</p>
      <p><strong>IPK:</strong> ${hasil["IPK"]}</p>
      <p><strong>KRS:</strong> ${hasil["KRS"]}</p>
      <p><strong>KHS:</strong> ${hasil["KHS"]}</p>
      <p><strong>Kegiatan Akademik:</strong> ${hasil["Kegiatan Akademik"]}</p>
      <p><strong>Kegiatan Non Akademik:</strong> ${hasil["Kegiatan Non Akademik"]}</p>
      <p><strong>Sertifikat/Dokumen lainnya:</strong> ${hasil["Sertifikat/ Dokumen lainnya"]}</p>
      <p><strong>Foto Kegiatan:</strong> <a href="${hasil["Foto Kegiatan"]}" target="_blank">Lihat Foto</a></p>
    `;
  } else {
    hasilDiv.innerHTML = `
      <h3 style="color: #dc3545;">NIM Tidak Ditemukan</h3>
      <p>Silakan periksa kembali atau hubungi admin.</p>
    `;
  }
}
