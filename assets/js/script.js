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

  const hasil = data.find((item) => item.nim === input);

  if (hasil) {
    hasilDiv.innerHTML = `
      <h3 style="color: #28a745;">Data Ditemukan</h3>
      <p><strong>Nama:</strong> ${hasil.nama}</p>
      <p><strong>Prodi:</strong> ${hasil.prodi}</p>
      <p><strong>IPK:</strong> ${hasil.ipk}</p>
      <p><strong>Semester:</strong> ${hasil.semester}</p>
    `;
  } else {
    hasilDiv.innerHTML = `
      <h3 style="color: #dc3545;">NIM Tidak Ditemukan</h3>
      <p>Silakan periksa kembali atau hubungi admin.</p>
    `;
  }
}
