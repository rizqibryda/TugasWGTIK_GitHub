function kenaRazia(tanggal, data) {
  const tilangPerOrang = {};

  // Memfilter data kendaraan yang berjenis "Mobil"
  const mobil = data.filter(mobil => mobil.type === "Mobil");

  // Melakukan iterasi terhadap setiap data mobil
  for (const mobilData of mobil) {
    const platNomorTerakhir = mobilData.plat.charAt(mobilData.plat.length - 1);
    const ganjilGenap = tanggal % 2 === 1; // true untuk ganjil, false untuk genap

    // Memfilter rute yang termasuk ganjil genap
    const ruteGanjilGenap = mobilData.rute.filter(rute => {
      return [
        "Gajah Mada",
        "Hayam Wuruk",
        "Sisingamangaraja",
        "Panglima Polim",
        "Fatmawati",
        "Tomang Raya"
      ].includes(rute);
    });

    // Menghitung pelanggaran untuk rute ganjil genap
    let pelanggaran = 0;
    for (const rute of ruteGanjilGenap) {
      const nomorTerakhirGenap = ganjilGenap ? 0 : 2;
      const nomorTerakhirPlat = parseInt(platNomorTerakhir);

      if (nomorTerakhirPlat % 2 !== nomorTerakhirGenap) {
        pelanggaran++;
      }
    }

    // Menambahkan pelanggaran ke data tilangPerOrang
    if (pelanggaran > 0) {
      if (tilangPerOrang[mobilData.name]) {
        tilangPerOrang[mobilData.name] += pelanggaran;
      } else {
        tilangPerOrang[mobilData.name] = pelanggaran;
      }
    }
  }

  // Mengubah object tilangPerOrang menjadi array of object
  const hasilRazia = [];
  for (const [nama, jumlahTilang] of Object.entries(tilangPerOrang)) {
    hasilRazia.push({ name: nama, tilang: jumlahTilang });
  }

  return hasilRazia;
}
