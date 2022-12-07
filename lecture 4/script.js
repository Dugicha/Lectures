
const loadingEl = document.querySelector("#loading");

let str = "https://api.nationalize.io/?name=";

const randomName = (defaultt) => {
  loadingEl.style.display = "block";
  fetch(str + defaultt)
    .then(async (response) => await response.json())
    .then((data) => {
      document.querySelector(
        "#temo"
      ).innerHTML = `country_id =  ${data.country[0].country_id}`;
      document.querySelector(
        "#beso"
      ).innerHTML = `name_probability ${data.country[0].probability}`;
      delete data.country[0];
      console.log(data.country);
    })
    .catch((err) => {
      console.log("err", err);
    })
    .finally(() => {
      loadingEl.style.display = "None";
    });
};

randomName("Giorgi");