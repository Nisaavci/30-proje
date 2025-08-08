// Tura ve yazı saayılarını oluştur ve başlangıçta sıfırla
let tura = 0;
let yazi = 0;
//HTML'de bulunan coin ,flip butonunu ve reset butonunu seç

let coin = document.querySelector(".coin");
let fliptBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
//flip buttonuna tıklanıldığında
fliptBtn.addEventListener("click", () => {
  //Rastgele 0 veya 1 sayısını seçer (0:Tura,1: yazı)
  let i = Math.floor(Math.random() * 2);
  //Coin animasyonunnu geçici olarak kapatt
  coin.style.animation = "none";
  if (i) {
    // eğer i 1 ise (yazı),100 milisaniye sonra coin'e flip-tura animasyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-tura 3s forwards";
    }, 100);
    tura++;
  } else {
    // eğer i 0 ise (tura),100 milisaniye sonra coin'e spin-yazı animasyonunu uygula
    setTimeout(() => {
      coin.style.animation = "spin-yazi 3s forwards";
    }, 100);
    yazi++;
  }
  //içerikleri güncelle butonu devre dışı bırak

  setTimeout(updateStats, 1600);
  disableButton();
});
//istatistikleri güncelleme fonksiyonu
function updateStats() {
  document.querySelector("#tura-count").textContent = `Tura: ${tura}`;

  document.querySelector("#yazi-count").textContent = `Yazı: ${yazi} `;
}

//butonu geçici olarak devre dışı bırakma fonksiyonu
function disableButton() {
  fliptBtn.disableButton = true;
  setTimeout(() => {
    fliptBtn.disabled = false;
  }, 3000);
}
//reset butonuna tıklama
resetBtn.addEventListener("click", () => {
  // Coin animasyonunu kapat,tura ve yazı sayılarını sıfırla,istatistikleri güncelle.
  coin.style.animation = "none";
  tura = 0;
  yazi = 0;
  updateStats();
});
