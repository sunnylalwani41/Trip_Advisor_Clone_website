import {navbar,footer} from "./footer.js"
let nav=document.getElementById("navbar")
   nav.innerHTML=navbar()
let foot=document.getElementById("footer")
   foot.innerHTML=footer()
let f1=document.getElementById("f1").addEventListener("click",function(){
    window.location.href=""
  })

  let first_slider = [
    {
      id: 1,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/7c/44/35/photo0jpg.jpg?w=300&h=-1&s=1",
      para: "Latest Recipe"
    },
    {
      id: 2,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5f/d6/94/caption.jpg?w=300&h=300&s=1",
      para: "Secrets of Wild India Tour",
      lo: "https://img.icons8.com/fluency/2x/like.png"
    },
    {
      id: 3,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/de/e7/80/k-k.jpg?w=300&h=300&s=1",
      para: "Kebabs & Kurries"
    },
    {
      id: 4,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/cb/4a/20/ballroom.jpg?w=300&h=300&s=1",
      para: "The Pride Hotel Nagpur"
    },
    {
      id: 5,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/85/76/47/caption.jpg?w=300&h=300&s=1",
      para: "The best of Nagpur walking tour"
    },
    {
      id: 6,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/f0/7a/01/getlstd-property-photo.jpg?w=300&h=300&s=1",
      para: "Urban Hermitage"
    },
    {
      id: 7,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/f4/4a/2d/caption.jpg?w=300&h=300&s=1",
      para: "Tiger & Temple (11 Days)"
    },
    {
      id: 8,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/c6/ea/caption.jpg?w=300&h=300&s=1",
      para: "Two Night Tiger Safari Experience at Tadoba National Park &Transfers From Nagpur"
    },
  ]
  let tourslide = document.getElementById("tour_slide")
  let to = document.getElementById("to_slide")
  let likelogo;
  appends(first_slider, tourslide)

  function appends(data, tourslide) {
    data.forEach(({ id, image, para, lo }) => {
      let div = document.createElement("div")
      div.setAttribute("class", "fashion")
      // div.onclick=()=>{
      //   window.location.href=""
      // }
      let div1 = document.createElement("div")
      div1.setAttribute("class", "container")
      let img = document.createElement("img")
      let par = document.createElement("p")
      let like = document.createElement("button")

      like.onclick = () => {
        ChangeColour(id,image,para)
        // likelogo.src="https://img.icons8.com/fluency/2x/like.png"
      }
      likelogo = document.createElement("img")
      likelogo.setAttribute("id", `sd${id}`)
      likelogo.setAttribute("class", "logo")
      img.setAttribute("class", "size")
      like.setAttribute("class", "likes")
      img.src = image
      par.innerText = para
      likelogo.src = "https://img.icons8.com/windows/2x/like.png"

      like.append(likelogo)
      div1.append(img, like)
      div.append(div1, par)
      tourslide.append(div)
    });


  }
  let i = 0;
  let ChangeColour = (id,image,para) => {
    let sd = document.getElementById(`sd${id}`)
    console.log(id)
    if (i % 2 == 1) {
      sd.src = "https://img.icons8.com/windows/2x/like.png"
      alert("Removed From the trip")
      localStorage.setItem("data",JSON.stringify(null))
    } else {
      sd.src = "https://img.icons8.com/fluency/2x/like.png"
      alert("Added to the trip")
      let dat={
        image,para
      }
      localStorage.setItem("data",JSON.stringify(dat))
    }
    i++;
  }
  let ri = document.getElementById("right")
  ri.addEventListener("click", function () {
    // location.href="#sd8"
    tourslide.scrollLeft += 2000

  })
  let lef = document.getElementById("left")
  lef.addEventListener("click", function () {
    // window.location.href="#sd1"
    tourslide.scrollLeft += -2000
  })
  let pune = [
    {
      id: 9,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5e/03/2d/caption.jpg?w=300&h=300&s=1",
      para: "Private 2-Day Tour to The Taj Mahal and Agra with Both Side Commercial Flights"
    },
    {
      id: 10,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8e/b8/c8/caption.jpg?w=300&h=300&s=1",
      para: "Immersive culture tour of Pune by private car with guide and local lunch"
    },
    {
      id: 11,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/67/95/1a/caption.jpg?w=300&h=300&s=1",
      para: "Private Agra Tour from Pune- All Inclusive"
    },
    {
      id: 12,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/72/1b/caption.jpg?w=300&h=300&s=1",
      para: "1-Day Trip to The Taj Mahal and Agra from Pune with Commercial Return Flights"
    },
    {
      id: 13,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/28/d2/43/caption.jpg?w=300&h=300&s=1",
      para: "Best of Pune Private City Tour with Lunch and Transport."
    },
    {
      id: 14,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/52/68/9c/caption.jpg?w=300&h=300&s=1",
      para: "2-Days Private Taj Mahal Agra Tour from Pune by Commercial Return Flights"
    },
    {
      id: 15,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/1b/63/caption.jpg?w=300&h=300&s=1",
      para: "Day Trip to The Taj Mahal and Agra from Pune with Both Side Commercial Flights."
    },
    {
      id: 16,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/c4/23/90/caption.jpg?w=300&h=300&s=1",
      para: "Day Trip to Mahabaleshwar-Panchgani (Guided Fullday Sightseeing Tour from Pune)"
    },
    {
      id: 17,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/9e/d5/36/caption.jpg?w=300&h=300&s=1",
      para: "Golden Triangle in 4 Days ex-Pune (Delhi-Agra-Jaipur): Private Luxury Tour"
    },
    {
      id: 18,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/60/30/caption.jpg?w=300&h=300&s=1",
      para: "Singhagad-Panshet-Lavasa Trip (Guided Full Day Sightseeing Tour)"
    },
  ]
  appends(pune, to)
  let rs = document.getElementById("righti")
  rs.addEventListener("click", function () {
    // location.href="#sd8"
    to.scrollLeft += 2000

  })
  let ls = document.getElementById("lefti")
  ls.addEventListener("click", function () {
    // window.location.href="#sd1"
    to.scrollLeft += -2000
  })
  let destinations = [
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=300&h=300&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73",
      para: "Dubai, United Arab Emirates"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d2/2f/7a/palace-from-the-outside.jpg?w=300&h=300&s=1",
      para: "Bengaluru, India"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/80/d7/80/caption.jpg?w=300&h=300&s=1",
      para: "Pune, India"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=300&h=300&s=1",
      para: "Hyderabad, India"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fe/ac/kolkata-calcutta.jpg?w=300&h=300&s=1",
      para: "Kolkata (Calcutta), India"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/00/d5/bf/visit-india-tours-sightseeing.jpg?w=300&h=300&s=1",
      para: "Gurugram (Gurgaon), India"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c0/b1/4b/caption.jpg?w=300&h=300&s=1",
      para: "London, UK"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/60/00/caption.jpg?w=300&h=300&s=1",
      para: "Singapore, Singapore"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a3/3b/8a/screenshot-2017-09-12.jpg?w=300&h=-1&s=1",
      para: "Jaipur, India"
    },
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/46/b8/chennai-madras.jpg?w=300&h=300&s=1",
      para: "Chennai (Madras), India"
    }

  ]
  let de = document.getElementById("desti")
  destinations.forEach(({ image, para }) => {
    let div = document.createElement("div")
    div.setAttribute("class", "fashion")

    let div1 = document.createElement("div")
    div1.setAttribute("class", "container")
    let img = document.createElement("img")
    img.setAttribute("class", "size")
    let par = document.createElement("p")
    par.setAttribute("class", "adjus")
    img.src = image
    par.innerText = para
    div1.append(img, par)
    div.append(div1)
    de.append(div)
  });
  let rum = document.getElementById("rightis")
  rum.addEventListener("click", function () {
    de.scrollLeft += 2000

  })
  let lum = document.getElementById("leftis")
  lum.addEventListener("click", function () {
    de.scrollLeft += -2000
  })
 
 