function trocarcor(id) {
  if (id == "btnBlue") {
      document.getElementsByTagName("body")[0].classList = "blue"
  }
  else if(id == "btnYellow"){ document.getElementsByTagName("body")[0].classList = "yellow"}
  else if(id == "btnGreen"){  document.getElementsByTagName("body")[0].classList = "green"} 
}



function createGame(player1, hours, player2) {
  return `
    <li>
    <img src="./assets/images/icon-${player1}.svg" alt="" />
    <strong>${hours}</strong>
    <img src="./assets//images/icon-${player2}.svg" alt="" />
  </li>
    `;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
      ${games}
      </ul>
    </div>
    `;
}


function createGrup(game, playGrups) {
  delay = delay + 0.4;
  return `
 <div class="grups" style="animation-delay: ${delay}s">
    <h3 for="estado" class="games">${game}</h3>
    <div name="gurpos" class="grup">
       <p class="items">${playGrups}</p>
    </div>
 </div>
  `
}

 
document.querySelector("#cards").innerHTML = 
createGrup("Jogos", "Grupo A") +
createCard("20/11", "domingo", createGame('ecuador', '13:00', 'qatar')) +
createCard("21/11", "segunda", createGame('senegal', '13:00', 'netherlands')) +

createGrup("Jogos", "Grupo B") +
createCard("21/11", "segunda", createGame('england', '10:00', 'iran')) +
createCard("21/11", "segunda", createGame('united-states', '16:00', 'wales')) +

createGrup("Jogos", "Grupo C") +
createCard("22/12", "terça", createGame('argentina', '07:00', 'saudi-arabia')) +
createCard("22/11", "terça", createGame('mexico', '13:00', 'poland')) +

createGrup("Jogos", "Grupo D") +
createCard("22/11", "terça", createGame('denmark', '10:00', 'tunisia')) +
createCard("22/11", "terça", createGame('france', '16:00', 'anguilla')) +

createGrup("Jogos", "Grupo E") +
createCard("23/11", "quarta", createGame('germany', '10:00', 'japan')) +
createCard("23/11", "quarta", createGame('spain', '13:00', 'costa-rica')) +

createGrup("Jogos", "Grupo F") +
createCard("23/11", "quarta", createGame('morocco', '07:00', 'croatia')) +
createCard("23/11", "quarta", createGame('belgium', '16:00', 'canada')) +

createGrup("Jogos", "Grupo G") +
createCard("24/11", "quinta", createGame('switzerland', '07:00', 'cameroon')) +
createCard("24/11", "quinta", createGame('brazil', '16:00', 'serbia')) +

createGrup("Jogos", "Grupo H") +
createCard("24/11", "quinta", createGame('uruguagy', '10:00', 'south-korea')) +
createCard("24/11", "quinta", createGame('portugal', '13:00', 'ghana'))
