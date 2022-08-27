import {navbar,footer} from "./footer.js"
let nav=document.getElementById("navbar")
nav.innerHTML=navbar()
let foot=document.getElementById("footer")
foot.innerHTML=footer()

let da=JSON.parse(localStorage.getItem("data"))
let tr=document.getElementById("trip")
// console.log(da.image)
    let img=document.createElement("img")
    let h3=document.createElement("h3")
    let p=document.createElement("p")
    let rate=document.createElement("h5")
    let type=document.createElement("h4")
    type.innerText= "Type: Restaurant $$$$ Indian Asian"
    rate.innerText=`Rating:3.5/5`
    p.innerText="location: Pune, India"
    img.src=da.image
    h3.innerText=da.para
    tr.append(img,h3,p,rate,type)



// location

// src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
//  https://api.openweathermap.org/data/2.5/weather?q=amravati&appid=954aa7967b84e674a850b1ba2b0d1e9b
function Search() {
    let city = document.querySelector("#query").value;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=954aa7967b84e674a850b1ba2b0d1e9b`
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        append(res)
        city.innerText = ""
    })
}
function append(data) {
    // let city=document.querySelector("#query").value;
    // city.innerHTML=null
    let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let container = document.querySelector("#container");
    container.innerHTML = null
    let h2 = document.createElement("h2")
    h2.innerText = data.name
    let temp = document.createElement("p")
    temp.innerText = `Temp:-${data.main.temp}`;
    let min_temp = document.createElement("p")
    min_temp.innerText = `Temp:-${data.main.temp_min}`;
    let max_temp = document.createElement("p")
    max_temp.innerText = `Temp:-${data.main.temp_max}`;
   
    // container.append(h2, temp, min_temp, max_temp)
    let iframe=document.querySelector("#gmap_canvas");
    iframe.src=url;


}
function getLocation(){
    navigator.geolocation.getCurrentPosition(success);
     function success(pos) {
        const crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        getWeatherOnLocation(crd.latitude,crd.longitude)
        }
        
}
getLocation()
function getWeatherOnLocation(lat,lon){
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=954aa7967b84e674a850b1ba2b0d1e9b`

    fetch(url)
    .then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
        append(res)
        city.innerText = ""
    })
}