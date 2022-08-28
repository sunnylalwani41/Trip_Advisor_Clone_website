let PadingString=(num)=>{
    return num.toString().padStart(2,"0");
}
let changeDate=(currentDate=new Date())=>{
    return [ currentDate.getFullYear(),
        PadingString(currentDate.getMonth()+1), PadingString(currentDate.getDate())].join("-")
}
let changeDate2=(currentDate=new Date())=>{
  if((currentDate.getDate()+4)>30){
    return [ currentDate.getFullYear(),
      PadingString(currentDate.getMonth()+1), PadingString((currentDate.getDate()+4)-30)].join("-")
  }
    return [ currentDate.getFullYear(),
        PadingString(currentDate.getMonth()+1), PadingString(currentDate.getDate()+4)].join("-");
}
let dateInput=document.getElementById("start");

dateInput.value=changeDate()


document.getElementById("end").value=changeDate2()
let ptag=document.querySelectorAll("#menu>p");

for(let i=0; i<ptag.length; i++){
    ptag[i].style.cursor="pointer";
    ptag[i].addEventListener("click", ()=>{
        ptag[i].style.borderBottom="3px solid white";
        for(let j=0; j<ptag.length; j++){
            if(j!==i){
                ptag[j].style.borderBottom="none";
            }
        }

    })
}
ptag[0].style.borderBottom="3px solid white";
ptag[0].addEventListener("click", ()=>{
    document.getElementById("checktick").style.display="grid";
    document.getElementById("checktick").innerHTML=`<div id="nonStop">
    <input type="checkbox" id="ch1" />

    <label>Prefer nonstop</label>
  </div>
  <div id="near">
    <input type="checkbox" id="ch2" />

    <label>Include nearby airports</label>
  </div>

  <h4>Compare prices (in new window)</h4>
  <div id="l3">
    <input type="checkbox" />

    <label>momondo</label>
  </div>`
})
ptag[1].addEventListener("click", ()=>{
    document.getElementById("checktick").style.display="grid";
    document.getElementById("checktick").innerHTML=`<div id="nonStop">
    <input type="checkbox" id="ch1" />

    <label>Prefer nonstop</label>
  </div>
  <div id="near">
    <input type="checkbox" id="ch2" />

    <label>Include nearby airports</label>
  </div>

  <h4>Compare prices (in new window)</h4>
  <div id="l3">
    <input type="checkbox" />

    <label>KAYAK</label>
    <input type="checkbox" />

    <label >CheapFlights</label>
    <label id="l5">Select all</label>
  </div>`;
})

ptag[2].addEventListener("click",()=>{
    document.getElementById("checktick").style.display="none";
})
let jahaj_detail=document.getElementsByClassName("company");
jahaj_detail[0].addEventListener("click",()=>{
  window.location.href="./Indigo.html"
})
jahaj_detail[1].addEventListener("click",()=>{
  window.location.href="./JetAirways.html"
})
jahaj_detail[2].addEventListener("click",()=>{
  window.location.href="./SpiceJet.html"
})
jahaj_detail[3].addEventListener("click",()=>{
  window.location.href="./AirIndiaExpress.html"
})