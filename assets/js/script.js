// Variabel global
let data = [];

// Spinner element
const hasilDiv = document.getElementById("hasil");
const spinner = document.createElement("div");
spinner.innerHTML = `<p style="color: gray;">⏳ Memuat data...</p>`;

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
  hasilDiv.innerHTML = ""; // Reset hasil
  hasilDiv.appendChild(spinner); // Tampilkan spinner

  // Delay untuk memastikan UI update sebelum proses data
  setTimeout(() => {
    const hasil = data.find((item) => item["NIM"] === input);

    if (hasil) {
      let output = `<h3 style="color: #28a745;">Data Ditemukan</h3><ul>`;
      for (const [key, value] of Object.entries(hasil)) {
        if (value && key !== "NIM") {
          if (key === "Foto Kegiatan") {
            output += `<li><strong>${key}:</strong> <a href="${value}" target="_blank">Lihat Foto</a></li>`;
          } else {
            output += `<li><strong>${key}:</strong> ${value}</li>`;
          }
        }
      }
      output += `</ul>`;
      hasilDiv.innerHTML = `<div class="hasil-box">${output}</div>`;

      // Auto scroll ke hasil
      hasilDiv.scrollIntoView({ behavior: "smooth" });
    } else {
      hasilDiv.innerHTML = `
        <h3 style="color: #dc3545;">NIM Tidak Ditemukan</h3>
        <p>Silakan periksa kembali atau hubungi admin.</p>
      `;
    }
  }, 300); // biar spinner sempat muncul
}
