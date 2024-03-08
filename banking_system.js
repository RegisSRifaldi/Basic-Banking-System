// Membuat class BankAccount
class BankAccount {
  #saldo = 0;
  constructor() {
    this.mataUang = "Rp.";
  }

  // Implementasi Deposit
  deposit(jumlahSaldo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (jumlahSaldo > 0) {
          this.#saldo += jumlahSaldo;
          resolve(`${this.mataUang} ${this.#saldo},00`);
          console.info(`${this.mataUang} ${this.#saldo},00`);
        } else {
          reject(
            "Masukkan jumlah deposit anda yang benar atau tidak boleh kosong"
          );
          console.info(
            "Masukkan jumlah deposit anda yang benar atau tidak boleh kosong"
          );
        }
      }, 1500);
    });
  }

  // Implementasi Withdraw
  withdraw(jumlahSaldo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (jumlahSaldo > 0 && jumlahSaldo <= this.#saldo) {
          this.#saldo -= jumlahSaldo;
          resolve(`${this.mataUang} ${this.#saldo},00`);
          console.info(`${this.mataUang} ${this.#saldo},00`);
        } else {
          reject(
            "Masukkan jumlah withdraw anda yang benar atau tidak boleh kosong"
          );
          console.info(
            "Masukkan jumlah withdraw anda yang benar atau tidak boleh kosong"
          );
        }
      }, 1500);
    });
  }
}

const account = new BankAccount();

// untuk tombol deposit
document.querySelector("#deposit").addEventListener("click", async () => {
  const jumlahSaldo = Number(
    window.prompt("Masukan jumlah deposit yang kamu mau: ")
  );
  try {
    const message = await account.deposit(jumlahSaldo);
    document.getElementById("saldo").innerHTML = message;
    alert(message);
  } catch (error) {
    alert(error);
  }
});

// untuk tombol withdraw
document.querySelector("#withdraw").addEventListener("click", async () => {
  const jumlahSaldo = Number(
    window.prompt("Masukan jumlah withdraw yang kamu mau: ")
  );
  try {
    const message = await account.withdraw(jumlahSaldo);
    document.getElementById("saldo").innerHTML = message;
    alert(message);
  } catch (error) {
    alert(error);
  }
});
