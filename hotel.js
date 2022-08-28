let box11=async()=>
{
 const url=`https://damp-garden-07205.herokuapp.com/api/resturentinpatana`;
 let res=await fetch(url);
 let data=await res.json();
 //console.log(data);
 kuku(data);
 
}

  let kuku =(data)=>
  {
   // console.log(data);
    let container=document.getElementById("box11");
  data.forEach(function (element){
console.log(element.image)
let div=document.createElement("div")
let img=document.createElement("img");
img.src=element.image;
let name=document.createElement("p");
name.innerText=element.name;
let price=document.createElement("p");
price.innerText=element.price;
div.append(img,name,price);
container.append(div);
  });
  }
box11();
let box12=async()=>
{
 const url=`https://damp-garden-07205.herokuapp.com/api/resturentinpatana`;
 let res=await fetch(url);
 let data=await res.json();
 //console.log(data);
 kuku1(data);
 
}

  let kuku1 =(data)=>
  {
   // console.log(data);
    let container=document.getElementById("box12");
  data.forEach(function (element){
console.log(element.image)
let div=document.createElement("div")
let img=document.createElement("img");
img.src=element.image;
let name=document.createElement("p");
name.innerText=element.name;
let price=document.createElement("p");
price.innerText=element.price;
div.append(img,name,price);
container.append(div);
  });
  }
box12();
let box13=async()=>
{
 const url=`https://damp-garden-07205.herokuapp.com/api/resturentinpatana`;
 let res=await fetch(url);
 let data=await res.json();
 //console.log(data);
 kuku2(data);
 
}

  let kuku2 =(data)=>
  {
   // console.log(data);
    let container=document.getElementById("box13");
  data.forEach(function (element){
console.log(element.image)
let div=document.createElement("div")
let img=document.createElement("img");
img.src=element.image;
let name=document.createElement("p");
name.innerText=element.name;
let price=document.createElement("p");
price.innerText=element.price;
div.append(img,name,price);
container.append(div);
  });
  }
box13();
let box14=async()=>
{
 const url=`https://damp-garden-07205.herokuapp.com/api/resturentinpatana`;
 let res=await fetch(url);
 let data=await res.json();
 //console.log(data);
 kuku3(data);
 
}

  let kuku3 =(data)=>
  {
   // console.log(data);
    let container=document.getElementById("box14");
  data.forEach(function (element){
console.log(element.image)
let div=document.createElement("div")
let img=document.createElement("img");
img.src=element.image;
let name=document.createElement("p");
name.innerText=element.name;
let price=document.createElement("p");
price.innerText=element.price;
div.append(img,name,price);
container.append(div);
  });
  }
box14();
let box15=async()=>
{
 const url=`https://damp-garden-07205.herokuapp.com/api/resturentinpatana`;
 let res=await fetch(url);
 let data=await res.json();
 //console.log(data);
 kuku4(data);
 
}

  let kuku4 =(data)=>
  {
   // console.log(data);
    let container=document.getElementById("box15");
  data.forEach(function (element){
console.log(element.image)
let div=document.createElement("div")
let img=document.createElement("img");
img.src=element.image;
let name=document.createElement("p");
name.innerText=element.name;
let price=document.createElement("p");
price.innerText=element.price;
div.append(img,name,price);
container.append(div);
  });
  }
box15();