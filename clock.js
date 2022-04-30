
let name = prompt("Hoşgeldiniz Değerli Kullanıcı! Lütfen İsminizi giriniz:");
myName.innerHTML = `${name.toUpperCase()}!`
function showTime() {
  const date = new Date();
  const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  const clock = document.getElementById('myClock')
  clock.innerHTML = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)} ${days[date.getUTCDay()]}`
  setTimeout(showTime, 1);
}
showTime();
