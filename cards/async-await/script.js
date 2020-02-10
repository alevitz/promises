const BASE_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
const CARD_URL = 'https://deckofcardsapi.com/api/deck/';
let DECK_ID;
let rotate = 0;
$(async function() {

  let deck = await axios.get(BASE_URL);
  DECK_ID = deck.data.deck_id;
  // console.log(deck_id);
});

async function drawCard(evt) {
  evt.preventDefault();
  
  let card = await axios.get(`${CARD_URL}${DECK_ID}/draw/?count=1`);
  let cardData = card.data.cards[0];
  let remaining = card.data.remaining;
  console.log(card.data.cards[0].value, "of", card.data.cards[0].suit);

  
  let zIndex = 52 - remaining;

  $("#card-results").append(`<img class="card" style="transform: rotate(${rotate}deg)" src=${cardData.image} alt="card image">`)

  rotate += 20;
}




$("#card-form").on("submit", drawCard);
