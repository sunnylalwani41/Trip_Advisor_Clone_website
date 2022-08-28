let btn=()=>
{
    let query=document.getElementById("query").value;
    console.log(query);
    if(query==="patna" ||query==="Patna" || query==="PATNA")
    {
    window.location.href="patna.html";
    }
    if(query==="ranchi" ||query==="Ranchi" || query==="RANCHI")
    {
        window.location.href="ranchi.html";   
    }
    if(query!=="patna"  && query!=="Patna" && query!=="PATNA" && query!=="ranchi" && query!=="Ranchi" && query!=="RANCHI")
    {
        alert("only serach patna and ranchi");
    }
}