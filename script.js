

const menu = [
  { nama: "AYAM BAKAR PAHA", harga: 16000, gambar: "https://asset.kompas.com/crops/N8WTCiVClutwEkjIgCykYbt1e2Q=/142x72:863x553/1200x800/data/photo/2022/09/27/633297e88244b.jpg" },
  { nama: "AYAM BAKAR DADA", harga: 16000, gambar: "https://asset.kompas.com/crops/N8WTCiVClutwEkjIgCykYbt1e2Q=/142x72:863x553/1200x800/data/photo/2022/09/27/633297e88244b.jpg" },
  { nama: "AYAM GORENG PAHA", harga: 15000, gambar: "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg" },
  { nama: "AYAM GORENG DADA", harga: 15000, gambar: "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg" },
  { nama: "LELE GORENG", harga: 12000, gambar: "https://awsimages.detik.net.id/community/media/visual/2018/07/23/00ae284c-6d03-45d2-8b0d-aa55de0de850_43.jpeg?w=700&q=90" },
  { nama: "NILA BAKAR", harga: 18000, gambar: "https://cdn0-production-images-kly.akamaized.net/ItoR9onCKrJ4AxDGpAw062eLjKM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2479729/original/055462200_1543310990-resep-ikan-nila-bakar-bumbu-sederhana-enak-banget.jpg" },
  { nama: "NILA GORENG", harga: 17000, gambar: "https://pbs.twimg.com/media/B48kYwfCUAAP50F.jpg" },
  { nama: "BEBEK GORENG PAHA", harga: 27000, gambar: "https://www.reseppedia.com/storage/upload/Resep_Bebek_Goreng_Sambal_Korek_Khas_Surabaya.jpeg" },
  { nama: "BEBEK GORENG DADA", harga: 28000, gambar: "https://www.reseppedia.com/storage/upload/Resep_Bebek_Goreng_Sambal_Korek_Khas_Surabaya.jpeg" },
  { nama: "SATE JEROOAN", harga: 2000, gambar: "https://www.sajianlezat.com/media/image/ayam/sate-jeroan-ayam.jpg" },
  { nama: "KEPALA BEBEK", harga: 5000, gambar: "https://png.pngtree.com/thumb_back/fw800/background/20240212/pngtree-duck-head-walking-on-pebbles-duck-head-walking-on-pebbles-on-photo-image_3111572.jpg" },
  { nama: "TAHU", harga: 2000, gambar: "https://th.bing.com/th/id/OIP.PmTa967QNRxENr_wac10OwHaE8?rs=1&pid=ImgDetMain" },
  { nama: "TEMPE", harga: 2000, gambar: "https://cdn0-production-images-kly.akamaized.net/Xh9E4a51qlcizreTeqyE6majrxM=/0x345:5792x3610/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3493625/original/011678000_1624676204-shutterstock_1985813441.jpg" },
  { nama: "ES TEH", harga: 3000, gambar: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/15093247/Ketahui-Fakta-Es-Teh-Manis.jpg" },
  { nama: "ES JERUK", harga: 5000, gambar: "https://opendrinks.io/img/es-jeruk.8e8c9fa9.jpg" },
  { nama: "TEH PANAS", harga: 3000, gambar: "https://kampushub.com/wp-content/uploads/2024/01/Manfaat-Minum-Teh-Tawar-hangat-1024x576.jpg" },
  { nama: "TEH TAWAR", harga: 2000, gambar: "https://allofresh.id/blog/wp-content/uploads/2023/10/manfaat-teh-tawar-4-1.jpg" },
  { nama: "JERUK PANAS", harga:5000, gambar: "https://www.masakapahariini.com/wp-content/uploads/2018/12/shutterstock_338815997.jpg" },
  { nama: "AIR HANGAT", harga: 0, gambar: "https://duniabebaz.com/tm_images/article/61bd89588aa8f6d3.jpghttps://cdn-2.tstatic.net/palu/foto/bank/images/ilustrasi-air-putih-hangat.jpg" },
  { nama: "AIR ES", harga:1000, gambar: "https://res.cloudinary.com/dk0z4ums3/image/upload/v1538383196/attached_image/minum-air-es-bisa-menurunkan-berat-badan-ini-faktanya.jpg" },
  { nama: "NASI SAMBEL", harga: 6000, gambar: "https://th.bing.com/th/id/OIP.0_HVq4STQlTXUGtrayHN2gHaHa?rs=1&pid=ImgDetMain" },
  { nama: "AYAM BAKAR 1", harga: 12000, gambar: "https://asset.kompas.com/crops/N8WTCiVClutwEkjIgCykYbt1e2Q=/142x72:863x553/1200x800/data/photo/2022/09/27/633297e88244b.jpg" },
  { nama: "AYAM GORENG 1", harga: 11000, gambar: "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg" },
  { nama: "AYAM BAKAR 1", harga: 12000, gambar: "https://asset.kompas.com/crops/N8WTCiVClutwEkjIgCykYbt1e2Q=/142x72:863x553/1200x800/data/photo/2022/09/27/633297e88244b.jpg" },
  { nama: "AYAM GORENG 1 ", harga: 11000, gambar: "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg" },
  { nama: "LELE GORENG 1", harga: 8000, gambar: "https://awsimages.detik.net.id/community/media/visual/2018/07/23/00ae284c-6d03-45d2-8b0d-aa55de0de850_43.jpeg?w=700&q=90" },
  { nama: "NILA BAKAR 1", harga: 14000, gambar: "https://cdn0-production-images-kly.akamaized.net/ItoR9onCKrJ4AxDGpAw062eLjKM=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2479729/original/055462200_1543310990-resep-ikan-nila-bakar-bumbu-sederhana-enak-banget.jpg" },
  { nama: "NILA GORENG 1", harga: 13000, gambar: "https://pbs.twimg.com/media/B48kYwfCUAAP50F.jpg" },
  { nama: "BEBEK PAHA 1", harga: 23000, gambar: "https://www.reseppedia.com/storage/upload/Resep_Bebek_Goreng_Sambal_Korek_Khas_Surabaya.jpeg" },
  { nama: "BEBEK DADA 1", harga: 24000, gambar: "https://www.reseppedia.com/storage/upload/Resep_Bebek_Goreng_Sambal_Korek_Khas_Surabaya.jpeg" },

];

let pesanan = [];

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === 'admin') {
    document.getElementById('login').classList.add('d-none');
    document.getElementById('app').classList.remove('d-none');
    tampilkanMenu();
  } else {
    document.getElementById('loginError').classList.remove('d-none');
  }
}

function logout() {
  document.getElementById('login').classList.remove('d-none');
  document.getElementById('app').classList.add('d-none');
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
  document.getElementById('loginError').classList.add('d-none');
  pesanan = [];
  renderPesanan();
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}

function tampilkanMenu() {
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = '';
  menu.forEach((item, index) => {
    menuList.innerHTML += `
      <div class="col-6">
        <div class="menu-card" onclick="tambahPesanan(${index})">
          <img src="${item.gambar}" alt="${item.nama}"/>
          <div class="fw-bold">${item.nama}</div>
          <div>Rp${item.harga.toLocaleString()}</div>
        </div>
      </div>`;
  });
}

function tambahPesanan(index) {
  const item = menu[index];
  const existing = pesanan.find(p => p.nama === item.nama);
  if (existing) {
    existing.jumlah += 1;
  } else {
    pesanan.push({ ...item, jumlah: 1 });
  }
  renderPesanan();
}

function hapusItem(i) {
  pesanan.splice(i, 1);
  renderPesanan();
}

function renderPesanan() {
  const list = document.getElementById('pesanan');
  const totalEl = document.getElementById('total');
  list.innerHTML = '';
  let total = 0;

  pesanan.forEach((p, i) => {
    const subtotal = p.harga * p.jumlah;
    total += subtotal;
    list.innerHTML += `
      <div class="border-bottom pb-2 mb-2 d-flex justify-content-between align-items-center">
        <div>
          <div class="fw-bold text-capitalize">${p.nama}</div>
          <div class="small">x${p.jumlah} = <span class="text-warning">Rp${subtotal.toLocaleString()}</span></div>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="hapusItem(${i})">
          <i class="bi bi-trash"></i> Hapus
        </button>
      </div>
    `;
  });

  totalEl.value = `Rp${total.toLocaleString()}`;
  hitungKembalian();
}


function hitungKembalian() {
  const bayar = parseInt(document.getElementById('bayar').value || 0);
  const total = pesanan.reduce((acc, item) => acc + item.harga * item.jumlah, 0);
  const kembalian = bayar - total;
  document.getElementById('kembali').value = `Rp${kembalian.toLocaleString()}`;
}
function cetakStruk() {
  const bayar = parseInt(document.getElementById('bayar').value || 0);
  const atasNama = document.getElementById('atasNama').value || 'Pembeli';
  const total = pesanan.reduce((acc, item) => acc + item.harga * item.jumlah, 0);
  const kembalian = bayar - total;

  const headerHeight = 40;
  const itemHeight = pesanan.length * 6.5;
  const footerHeight = 45;
  const pageHeight = headerHeight + itemHeight + footerHeight;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: [58, pageHeight] });


  const left = 5;
  const right = 50;
  let y = 10;

  const separator = "=".repeat(32);
  const bold = (text, x, y) => {
    doc.setFont("courier", "bold");
    doc.text(text, x, y);
    doc.text(text, x + 0.2, y);
  };
  const wrapText = (doc, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    words.forEach(word => {
      const testLine = line + word + ' ';
      const testWidth = doc.getTextWidth(testLine);
      if (testWidth > maxWidth) {
        doc.text(line, x, y);
        y += lineHeight;
        line = word + ' ';
      } else {
        line = testLine;
      }
    });
    if (line) {
      doc.text(line.trim(), x, y);
      y += lineHeight;
    }
    return y;
  };

  doc.setFontSize(8);
  const logo = new Image();
logo.src = 'logo-kss.jpg';
logo.onload = function () {
  doc.addImage(logo, 'JPEG', 14, y, 30, 20);
  y += 25;

  // lalu lanjut dengan teks seperti biasa
};
 doc.setFont("courier", "bold");
doc.setFontSize(12); // lebih kecil dari teks biasa
const title = 'KONCO SEGO SAMBEL';
const titleX = (58 - doc.getTextWidth(title)) / 2; // supaya tengah
doc.text(title, titleX, y);
y += 6;

  doc.setFont("courier", "normal");
  doc.setFontSize(8);
  y = wrapText(doc, 'Jl. Dieng Km 07, Penampelan', left, y, 48, 5);
  y = wrapText(doc, 'Garung, Wonosobo', left, y, 48, 5);
  doc.text(separator, left, y); y += 5;

  y = wrapText(doc, `Nama  : ${atasNama}`, left, y, 48, 5);
  y = wrapText(doc, `Waktu : ${new Date().toLocaleString()}`, left, y, 48, 5);
  doc.text(separator, left, y); y += 5;

  if (pesanan.length > 0) {
    pesanan.forEach(p => {
  const namaFix = p.nama.split(' ')
    .map(k => k.charAt(0).toUpperCase() + k.slice(1).toLowerCase())
    .join(' ');

  const hargaTotal = `Rp${(p.harga * p.jumlah).toLocaleString('id-ID')}`;
  const line = `${namaFix.padEnd(16)} x${p.jumlah.toString().padEnd(2)} ${hargaTotal.padStart(9)}`;

  doc.text(line, left, y);
  y += 4.5;
});


    y += 2;
    doc.text(separator, left, y); y += 5;
  }

  const printRight = (label, value) => {
  const labelPad = label.padEnd(12, ' ');
  const valuePad = value.padStart(14, ' ');
  doc.text(`${labelPad}${valuePad}`, left, y);
  y += 5;
};


printRight('Total', `Rp${total.toLocaleString('id-ID')}`);
printRight('Bayar', `Rp${bayar.toLocaleString('id-ID')}`);
printRight('Kembalian', `Rp${kembalian.toLocaleString('id-ID')}`);

  doc.text(separator, left, y); y += 6;
  doc.setFont("courier", "bold");
  doc.setFontSize(12);
  const thanks = 'Terima Kasih';
  const centerX = (58 - doc.getTextWidth(thanks)) / 2;
  doc.text(thanks, centerX, y); y += 5;

  const blobURL = doc.output('bloburl');
  window.open(blobURL, '_blank');

  const itemSummary = {};
  pesanan.forEach(p => {
    itemSummary[p.nama] = (itemSummary[p.nama] || 0) + p.jumlah;
  });

  const rekap = JSON.parse(localStorage.getItem('rekapan') || '[]');
  rekap.push({
    tanggal: new Date().toLocaleString(),
    total,
    items: itemSummary
  });
  localStorage.setItem('rekapan', JSON.stringify(rekap));

  pesanan = [];
  document.getElementById('bayar').value = '';
  document.getElementById('kembali').value = '';
  document.getElementById('atasNama').value = '';
  renderPesanan();
}


function tampilkanRekap() {
  window.location.href = "rekapan.html";
}


function selesaiTransaksi() {
  const rekap = JSON.parse(localStorage.getItem('rekapan') || '[]');
  const itemSummary = {};

  pesanan.forEach(p => {
    if (itemSummary[p.nama]) {
      itemSummary[p.nama] += p.jumlah;
    } else {
      itemSummary[p.nama] = p.jumlah;
    }
  });

  const transaksiBaru = {
    tanggal: new Date().toLocaleString(),
    total: pesanan.reduce((acc, p) => acc + p.harga * p.jumlah, 0),
    items: itemSummary
  };

  rekap.push(transaksiBaru);
  localStorage.setItem('rekapan', JSON.stringify(rekap));
  pesanan = [];
  window.location.href = "rekapan.html";
}
