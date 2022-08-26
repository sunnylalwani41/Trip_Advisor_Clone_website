// let data = [
//   {
//     name: "Highlights of Mumbai Private Sightseeing Tour:Winner of TRAVELLERS CHOICE AWARD",
//     image:
//       "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/06/6a/c4/f0.jpg",
//     reviews: 247,
//     price: 8500,
//     recomended: 99,
//     persons: 1,
//   },
//   {
//     name: "5-Hour Private Mumbai Sightseeing Tour",
//     image:
//       "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/06/e4/85/39.jpg",
//     reviews: 255,
//     price: 8000,
//     recomended: 96,
//     persons: 1,
//   },
// ];
let data = JSON.parse(localStorage.getItem("data"));
window.addEventListener("load", () => {
  main();
});
function main() {
  let data = JSON.parse(localStorage.getItem("data"));
  let subtotal = document.querySelector("#subtotal");
  let Total = document.querySelector("#total");
  let total = document.querySelector("#Total");
  let x = 0;

  for (let i = 0; i < data.length; i++) {
    let y = data[i].price * data[i].persons;
    x += y;
  }

  total.innerText = `Total(${data.length})`;

  subtotal.innerText = `₹${x}`;

  Total.innerText = `₹${x}`;

  if (data.length !== 0) {
    append(data);
  }
}
function append(data) {
  let cont = document.querySelector("#container");
  cont.innerHTML = "";
  data.forEach((el, ind) => {
    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    name = el.name;

    let stars = document.createElement("img");
    stars.src = "https://miro.medium.com/max/1106/1*PvoG2ZWSd5Z-a3k2jdM55A.png";
    stars.setAttribute("id", "star");

    let rev = document.createElement("p");
    rev.innerText = el.reviews;

    let heart = document.createElement("img");
    heart.src = "https://cdn-icons-png.flaticon.com/512/3237/3237429.png";
    heart.setAttribute("id", "heart");

    let reco = document.createElement("p");
    reco.innerText = `${el.recomended}% of travellers recomended this experience`;

    let price = document.createElement("p");
    price.innerText = `${el.persons} Adult x ₹${el.price}`;

    let total = document.createElement("p");
    total.innerText = `Total ₹${el.price * el.persons}`;

    let edit = document.createElement("p");
    edit.innerText = "Edit";
    edit.setAttribute("class", "perform");
    edit.onclick = () => {
      Edit(ind);
    };

    let remove = document.createElement("p");
    remove.innerText = "Remove";
    remove.setAttribute("class", "perform");
    remove.onclick = () => {
      Remove(ind);
    };

    let amount_div = document.createElement("div");
    amount_div.setAttribute("id", "amountDiv");
    amount_div.append(price, total);

    let perform_div = document.createElement("div");
    perform_div.setAttribute("id", "performDiv");
    perform_div.append(edit, remove);

    let image_div = document.createElement("div");
    image_div.setAttribute("id", "imageDiv");
    image_div.append(img, perform_div);

    let star_div = document.createElement("div");
    star_div.setAttribute("id", "starDiv");
    star_div.append(stars, rev);

    let heart_div = document.createElement("div");
    heart_div.setAttribute("id", "heartDiv");
    heart_div.append(heart, reco);

    let content_div = document.createElement("div");
    content_div.setAttribute("id", "contentDiv");
    content_div.append(name, star_div, heart_div, amount_div);

    let main_div = document.createElement("div");
    main_div.setAttribute("class", "cards");
    main_div.append(image_div, content_div);

    cont.append(main_div);
  });
}
function Edit(ind) {
  let x = window.prompt("Add Persons");
  data[ind].persons = +x;
  localStorage.setItem("data", JSON.stringify(data));
  main(data);
}

function Remove(ind) {
  data.splice(ind, 1);
  localStorage.setItem("data", JSON.stringify(data));
  main(data);
}
