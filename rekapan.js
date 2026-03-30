document.addEventListener('DOMContentLoaded', () => {
  const rekapList = document.getElementById('rekapList');
  const totalSemua = document.getElementById('totalSemua');
  const data = JSON.parse(localStorage.getItem('rekapan') || '[]');
  let grandTotal = 0;

  if (data.length === 0) {
    rekapList.innerHTML = '<li class="list-group-item">Belum ada transaksi</li>';
    if (totalSemua) totalSemua.textContent = 'Rp0';
    return;
  }

  data.forEach(item => {
    let detail = '';
    for (const nama in item.items) {
      detail += `<div class='small text-muted'>- ${nama}: ${item.items[nama]}x</div>`;
    }
    grandTotal += item.total;
    rekapList.innerHTML += `<li class="list-group-item">
      <div class="fw-bold">${item.tanggal}</div>
      <div>Total: Rp${item.total.toLocaleString()}</div>
      ${detail}
    </li>`;
  });

  if (totalSemua) totalSemua.textContent = `Rp${grandTotal.toLocaleString()}`;
});

function exportToExcel() {
  
  const data = JSON.parse(localStorage.getItem('rekapan') || '[]');
  if (data.length === 0) {
    alert("Belum ada data untuk diekspor!");
    return;
  }

  const rows = [];
  rows.push(["Tanggal", "Total"]);
  let grandTotal = 0;

  data.forEach(transaksi => {
    grandTotal += transaksi.total;
    rows.push([
      transaksi.tanggal,
      `Rp${transaksi.total.toLocaleString()}`
    ]);
  });

  // Tambahkan baris kosong + total keseluruhan
  rows.push(["", ""]);
  rows.push(["TOTAL HARI INI", `Rp${grandTotal.toLocaleString()}`]);

  const worksheet = XLSX.utils.aoa_to_sheet(rows);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Rekapan");

  const tanggalHariIni = new Date().toISOString().split("T")[0];
  XLSX.writeFile(workbook, `rekapan-${tanggalHariIni}.xlsx`);
}
function resetRekapan() {
  if (confirm("Yakin ingin menghapus semua data rekapan?")) {
    localStorage.removeItem('rekapan');
    location.reload();
  }
}
