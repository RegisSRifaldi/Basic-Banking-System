let saldo = 0;

function tambahSaldo() {
  let mataUang = "Rp.";
  let menambahkanSaldo = Number(
    window.prompt(
      `Masukkan jumlah saldo yang kamu mau masukkan atau tambahkan: `
    )
  );
  if (menambahkanSaldo > 0) {
    saldo = saldo + menambahkanSaldo;
    document.getElementById("saldo").innerHTML = `${mataUang} ${saldo},00`;
    alert(`Saldo yang baru masuk: ${mataUang} ${saldo},00`);
  } else {
    alert("Masukkan jumlah saldo yang benar atau tidak boleh kosong");
  }
}

function kurangiSaldo() {
  let mataUang = "Rp.";
  let mengurangiSaldo = Number(
    window.prompt(`Masukkan jumlah saldo yang kamu ambil atau kurangi: `)
  );
  if (mengurangiSaldo > 0 && mengurangiSaldo <= saldo) {
    saldo = saldo - mengurangiSaldo;
    document.getElementById("saldo").innerHTML = `${mataUang} ${saldo},00`;
    alert(`Sisa saldo kamu saat ini: ${mataUang} ${saldo},00`);
  } else {
    alert("Masukkan jumlah saldo yang akan di tarik atau saldo kamu kurang");
  }
}
