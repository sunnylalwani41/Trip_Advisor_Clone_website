let box1=async()=>
{
    const url=`https://damp-garden-07205.herokuapp.com/api/placestopatna`;
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
let box2=async()=>
{
    const url=`https://damp-garden-07205.herokuapp.com/api/waytopatna`;
    let res=await fetch(url);
    let data=await res.json();
   // console.log(data);
    kuku2(data);
}
let kuku2=(data)=>
{
    let container=document.getElementById("box2");
    data.forEach(element => {
        console.log(element);
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.image;
        let name=document.createElement("h3");
        name.innerText=element.name;
        let data=document.createElement("p");
        data.innerText=element.data;
        let des=document.createElement("p");
        des.innerText=element.des;
        div.append(img,name,data,des);
        container.append(div);
    });
}
box2();
let box3=async()=>
{
    const url=`https://damp-garden-07205.herokuapp.com/api/waytopatna`;
    let res=await fetch(url);
    let data=await res.json();
   // console.log(data);
    kuku3(data);
}
let kuku3=(data)=>
{
    let container=document.getElementById("box3");
    data.forEach(element => {
        console.log(element);
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.image;
        let name=document.createElement("h3");
        name.innerText=element.name;
        let data=document.createElement("p");
        data.innerText=element.data;
        let des=document.createElement("p");
        des.innerText=element.des;
        div.append(img,name,data,des);
        container.append(div);
    });
}
box3();
let box4=async()=>
{
    const url=`https://damp-garden-07205.herokuapp.com/api/attractioninpatan`;
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
document.getElementById("btnseeall").addEventListener("click",btnseeall);
function btnseeall()
{
window.location.href="patnaseeall.html"
}