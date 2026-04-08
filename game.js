const outfit = {
    fronthair: "frontbraids.png",
    backhair: "backbraids.png",
    top: "none.png", 
    bottom: "none.png",
    shoes: "none.png",
    accessories: "none.png"
}
const shirts = ["none.png", "starShirt.png", "longsleeve.png", "https://placehold.co/100x100/orange/black"];
let topitem = document.getElementById("top");
let fronthairitem = document.getElementById("fronthair")
let backhairitem = document.getElementById("backhair")



function wearshirt(item) {
    if (shirts[0]==outfit.top){
        outfit.top= shirts[item]; 
    }
    else if (shirts[item]==outfit.top){
        outfit.top= shirts[0]
    }
    else{
        outfit.top=shirts[item]
    }
    topitem.src = outfit.top;
    console.log(outfit);
}