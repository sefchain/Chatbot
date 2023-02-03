// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   const message = document.querySelector("input");
//   const corps = document.getElementById("corps");
//   if (message.value) {
//     const msg = document.createElement("div");
//     msg.className = "row mt-3 pe-2";
//     msg.innerHTML = ` <div class="col-3"></div>
//   <div class="col-9 msg rounded " style="background-color:burlywood">${message.value}</div>`;
//     corps.appendChild(msg);
//     message.value = "";
//     message.placeholder = "entrer un message";

//     const reponse = document.createElement("div");
//     reponse.className = "row mt-3 ps-2";
//     reponse.innerHTML = `<div class="col-9 rounded msg" style="background-color: aqua"> <audio controls>
//   <source src="audio.mp3" type="audio/mpeg">
// </audio> </div>
//   <div class="col-3"></div>`;
//     corps.appendChild(reponse);
//   }
// });
// document.querySelector("i").addEventListener("click", function () {
//   document.getElementById("chatbot").style.display = "none";
//   document.getElementById("minichatbot").style.display = "block";
// });
// document.getElementById("minichatbot").addEventListener("click", function () {
//   document.getElementById("chatbot").style.display = "block";
//   document.getElementById("minichatbot").style.display = "none";
// });
// const casMessage = {
//   message: "bonjour",
//   reponse: `Bonjour Cher Client veuiller choisir une option:
// 1-Ecouter de la musique douce.
// 2-Vous aider à resoudre une equation de 1er degré.
// 3-Vous envoyer votre horoscope.
// 4-Vous envoyer le conseil du jours`,
// };
// const casMessages = [{ message: "bonjour", reponse: "Hi" }]

let reponse = [
  [
    "bonjour",
    `Bonjour choisissez une options suivante:<br>
    tappez 1 si vous voulez entendre de la musique douce;<br>
    tappez 2 si vous voulez connaitre l'actualité de la journée;<br>
    tappez 3 si vous voulez avoir le lien d'un cours de jquery sur youtube;<br>
    tappez 4 si vous voulez quittez.`,
  ],
  [
    "1",
    `<audio controls>
 <source src="audio.mp3" type="audio/mpeg">
</audio>`,
  ],
  [
    "2",
    `C’est au Grand Stade de Tanger que le coup d’envoi du Mondialito, alias FIFA Club World Cup 2022, a été donné en ce 1er février 2023.`,
  ],
  [
    "3",
    `<a href='https://www.youtube.com/watch?v=7GazlDlul1o&list=PLwLsbqvBlImGxO-ge8D2J7_zNedld8w4T'>Chaine youtube pour apprendre jquery</a>`,
  ],
  ["4", "Merci pour votre visite au revoir"],
];
$(document).ready(function () {
  $("button").click(function () {
    if ($("input").val()) {
      $(".corps").append(`<div class='row mt-3 pe-2'> <div class="col-3"></div>
    <div class="col-9 msg rounded " style="background-color:burlywood">${$(
      "input"
    ).val()}</div><div>`);
      console.log(undefined || "je suis la");
      if (
        reponse.filter((e) => e[0] === $("input").val().toLowerCase())
          .length !== 0
      ) {
        [[, resp]] = reponse.filter(
          (e) => e[0] === $("input").val().toLowerCase()
        );
      } else {
        resp = "veillez saisir la bonne reponse";
      }

      setTimeout(() => {
        $(".corps")
          .append(`<div class="row mt-3 ps-2"><div class="col-9 rounded msg" style="background-color: aqua">${resp}</div>
    <div class="col-3"></div></div>`);

        $(".corps").scrollTop(1000000);
      }, 500);
      $("input").val("");
      $("input").attr("placeholder", "entrer un message");
      $(".corps").scrollTop(1000000);
    }
  });
  $("i").click(function () {
    $("#chatbot").hide();
    $("#minichatbot").show();
  });
  $("#minichatbot").click(function () {
    $("#chatbot").show();
    $("#minichatbot").hide();
  });
});
