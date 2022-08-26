let data = [
  {
    name: "Highlights of Mumbai Private Sightseeing Tour:Winner of TRAVELLERS CHOICE AWARD",
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/06/6a/c4/f0.jpg",
    reviews: 247,
    price: 8500,
    recomended: 99,
    persons: 1,
  },
  {
    name: "5-Hour Private Mumbai Sightseeing Tour",
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-360x240/06/e4/85/39.jpg",
    reviews: 255,
    price: 8000,
    recomended: 96,
    persons: 1,
  },
];
if (data.length !== 0) {
  append(data);
}
function append(data) {
  let cont = document.querySelector("#container");
  cont.innerHTML = "";
  data.forEach((el) => {
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

    //   let edit = document.createElement("button");
    //   edit.innerText = "Edit";

    //   let remove = document.createElement("button");
    //   remove.innerText = "Remove";

    let edit = document.createElement("p");
    edit.innerText = "Edit";
    edit.onclick = () => {
      Edit(el);
    };

    let image_div = document.createElement("div");
    image_div.setAttribute("id", "imageDiv");
    image_div.append(img, edit);

    let star_div = document.createElement("div");
    star_div.setAttribute("id", "starDiv");
    star_div.append(stars, rev);

    let heart_div = document.createElement("div");
    heart_div.setAttribute("id", "heartDiv");
    heart_div.append(heart, reco);

    let content_div = document.createElement("div");
    content_div.setAttribute("id", "contentDiv");
    content_div.append(name, star_div, heart_div, price);

    let main_div = document.createElement("div");
    main_div.setAttribute("class", "cards");
    main_div.append(image_div, content_div);

    cont.append(main_div);
  });
}
function Edit(el) {
  let x = window.prompt("Add Persons");
  el.persons = x;
  console.log(el.persons);
}
