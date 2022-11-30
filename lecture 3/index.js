                //pirveli
               
//  let str = 'https://api.nationalize.io/?name='

// function randomName(name) {
//   fetch(str + 'name')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// }

// randomName('giorgi');

               // meore 

// const button = document.querySelector("#vaxo")
// const inputt = document.querySelector("#irakli")

//  let str = 'https://api.nationalize.io/?name='

// function randomName() {
//   fetch(str + inputt.value)
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// }





// button.addEventListener('click',randomName)





const button = document.querySelector("#vaxo")
const inputt = document.querySelector("#irakli")


 let str = 'https://api.nationalize.io/?name='

function randomName() {
  fetch(str + inputt.value)
  .then((response) => response.json())
  .then((data) => {document.querySelector("#temo").innerHTML = data.country[0].country_id;
  document.querySelector("#beso").innerHTML = data.country[0].probability
})

}



button.addEventListener('click',randomName)