async function processForm(evt) {
  evt.preventDefault();
  console.log('TEST');
  let number = $('#number').val();

  let fact1 = axios.get(`http://numbersapi.com/${number}?json`);
  let fact2 = axios.get(`http://numbersapi.com/${number}?json`);
  let fact3 = axios.get(`http://numbersapi.com/${number}?json`);
  let fact4 = axios.get(`http://numbersapi.com/${number}?json`);

  $("#number-results").empty();

  // Promise.all([fact1, fact2, fact3, fact4]).then(function(facts) {
//     for(fact of facts) {
//       console.log(fact.data.text);
//       $("#number-results").append(`<p>Your fact is: ${fact.data.text}</p>`);
//     }
//   })

let factsPromise = await Promise.all([fact1, fact2, fact3, fact4]);

// console.log(factsPromise.data.text);
for(fact of factsPromise) {
        console.log(fact);
        $("#number-results").append(`<p>Your fact is: ${fact.data.text}</p>`);
      }
    }


  // console.log(fact1.json());
  // console.log(fact1.json());
  // console.log(fact1.json());
  // console.log(fact1.json());

  
  // $("#number-results").append(`<p>Your fact 2 is ${fact2.data.text}</p>`);
  // $("#number-results").append(`<p>Your fact 3 is ${fact3.data.text}</p>`);
  // $("#number-results").append(`<p>Your fact 4 is ${fact4.data.text}</p>`);
// }

$("#numbers-form").on("submit", processForm);