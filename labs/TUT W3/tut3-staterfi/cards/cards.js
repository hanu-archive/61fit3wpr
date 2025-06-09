const cardImages = [
  "images/2C.png",
  "images/2D.png",
  "images/2H.png",
  "images/2S.png",
  "images/3C.png",
];

function populateCardBoard() {
  const cardBoard = document.getElementById("card-board");

  const container = document.createElement("div");
  container.className = "card-container";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.marginTop = "20px";

  cardImages.forEach((imageSrc, index) => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = `Card ${index + 1}`;
    img.className = "card-image";
    img.style.height = "100px";
    img.style.margin = "10px";
    img.addEventListener("click", () => enlargeCard(img));

    container.appendChild(img);
  });

  cardBoard.appendChild(container);
}

function enlargeCard(selectedCard) {
  const cards = document.querySelectorAll(".card-image");
  cards.forEach((card) => {
    card.style.height = "100px";
  });

  selectedCard.style.height = "150px";
}

window.onload = populateCardBoard;
