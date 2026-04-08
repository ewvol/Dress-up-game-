const outfit = {
    fronthair: "frontbraids.png",
    backhair: "backbraids.png",
    top: "none", 
    bottom: "none",
    shoes: "none",
    accessories: "none"
}
const shirts = ["none", "starShirt.png", "longsleeve.png"];
let topitem = document.getElementById("top");
let fronthairitem = document.getElementById("fronthair")
let backhairitem = document.getElementById("backhair")



function wearshirt(item) {
    if (shirts[0]==outfit.top){
    outfit.top= shirts[item]; 
    topitem.src = outfit.top;
    console.log(outfit)
    }
    else if (shirts[item]==outfit.top){
        outfit.top= shirts[0]
        topitem.src=outfit.top
    }
    else{
        
    }
}