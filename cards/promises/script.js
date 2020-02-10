const BASE_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const CARD_URL = 'https://deckofcardsapi.com/api/deck/';
let DECK_ID;
let rotate = 0;
$(function() {

  axios
    .get(BASE_URL) 
    .then(function(resp) {
      console.log(resp);
      DECK_ID = resp.data.deck_id;
      console.log(DECK_ID);

  });
});

function drawCard(evt) {
  evt.preventDefault();
  
  axios
    .get(`${CARD_URL}${DECK_ID}/draw/?count=1`)
    .then(function(resp) {
    console.log(resp);
    let cardData = resp.data.cards[0];
    let remaining = resp.remaining;
    // console.log(card.data.cards[0].value, "of", card.data.cards[0].suit);
    // let zIndex = 52 - remaining;
    $("#card-results").append(`<img class="card" style="transform: rotate(${rotate}deg)" src=${cardData.image} alt="card image">`)
    rotate += 20;

  });

  


}




$("#card-form").on("submit", drawCard);
