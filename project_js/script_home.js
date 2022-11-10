let searchBtn = document . getElementById ("search");
searchBtn . addEventListener ("click" , e =()=>{
    document . getElementById ("search") .style. display = "none";
    document .getElementById ("modelDiv"). style.display = "block";
});
let closeBtn = document . getElementById ("modelCl");
closeBtn.addEventListener ("click" , e=()=>{
    document . getElementById ("search") .style. display = "inline-block";
    document .getElementById ("modelDiv"). style.display = "none";
});
window.addEventListener ("click" , e =(event)=>{
    let modelDiv = document .getElementById ("modelDiv");
    if (event.target === modelDiv) {
        document . getElementById ("search") .style. display = "inline-block";
        document .getElementById ("modelDiv"). style.display = "none"; 
    }
});

