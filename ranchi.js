let box1=async()=>
{
    const url=`https://damp-garden-07205.herokuapp.com/api/placestoranchi`;
    let res=await fetch(url);
    let data=await res.json();
   // console.log(data);
    kuku1(data);
}
let kuku1=(data)=>
{
    let container=document.getElementById("box1");
    data.forEach(element => {
        console.log(element);
        let div=document.createElement("div");
        let img=document.createElement("img");
       
        img.src=element.image;
        
        div.append(img);
        container.append(div);
    });
}
box1();

let box4=async()=>
{
    const url=`https://damp-garden-07205.herokuapp.com/api/attractioninranchi`;
    let res=await fetch(url);
    let data=await res.json();
   // console.log(data);
    kuku4(data);
}
let kuku4=(data)=>
{
    let container=document.getElementById("box4");
    data.forEach(element => {
        console.log(element);
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.image;
        let name=document.createElement("h3");
        name.innerText=element.name;
        let place=document.createElement("p");
        place.innerText=element.place;
        
        let des=document.createElement("p");
        des.innerText=element.des;
        div.append(img,name,place,des);
        container.append(div);
    });
}
box4();
document.getElementById("btnseeall").addEventListener("click",btnseeall) 
function btnseeall(){
window.location.href="ranchisell.html";
} 