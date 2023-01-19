const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const message = document.querySelector("input");
  const corps = document.getElementById("corps");
  if (message.value) {
    const msg = document.createElement("div");
    msg.className = "row mt-3 pe-2";
    msg.innerHTML = ` <div class="col-3"></div>
  <div class="col-9 msg rounded " style="background-color:burlywood">${message.value}</div>`;
    corps.appendChild(msg);
    message.value = "";
    message.placeholder = "entrer un message";

    const reponse = document.createElement("div");
    reponse.className = "row mt-3 ps-2";
    reponse.innerHTML = `<div class="col-9 rounded msg" style="background-color: aqua"> <audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio> </div>
  <div class="col-3"></div>`;
    corps.appendChild(reponse);
  }
});
document.querySelector("i").addEventListener("click", function () {
  document.getElementById("chatbot").style.display = "none";
  document.getElementById("minichatbot").style.display = "block";
});
document.getElementById("minichatbot").addEventListener("click", function () {
  document.getElementById("chatbot").style.display = "block";
  document.getElementById("minichatbot").style.display = "none";
});
// const casMessage = {
//   message: "bonjour",
//   reponse: `Bonjour Cher Client veuiller choisir une option:
// 1-Ecouter de la musique douce.
// 2-Vous aider à resoudre une equation de 1er degré.
// 3-Vous envoyer votre horoscope.
// 4-Vous envoyer le conseil du jours`,
// };
// const casMessages = [{ message: "bonjour", reponse: "Hi" }];
