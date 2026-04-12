const outfit = {
    fronthair: "frontbraids.png",
    backhair: "backbraids.png",
    top: "none.png", 
    bottom: "none.png",
    shoes: "none.png",
    accessories: "none.png"
}
const shirts = ["none.png", "starShirt.png", "frillyBlouse.png","whiteBlouse.png" ,"https://placehold.co/100x100/orange/black"];
const bottoms = ["none.png","longSkirt.png", "blackWhiteSkirt"];
let topitem = document.getElementById("top");
let bottomitem= document.getElementById("bottoms")
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

function wearpant(item){
    if (bottoms[0]==outfit.bottom){
        outfit.bottom= bottoms[item];
    }
    else if (bottoms[item]==outfit.bottom){
        
    }
}

function changecategory(event,topic){
    let options = document.getElementById("newoptions")
    let tabs= document.getElementsByClassName("meow")
    topic= document.getElementById(topic)
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    
    topic.style.display = "block"
}


