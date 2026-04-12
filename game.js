let outfit = {
    fronthair: "frontbraids.png",
    backhair: "backbraids.png",
    top: "none.png", 
    bottom: "none.png",
    shoes: "none.png",
    accessories: "none.png"
}
const shirts = ["none.png", "starShirt.png", "frillyBlouse.png","whiteBlouse.png"];
const bottoms = ["none.png","longSkirt.png", "blackWhiteSkirt.png"];
const accessories = ["none.png"]

let topitem = document.getElementById("top");
let bottomitem= document.getElementById("bottoms")
let fronthairitem = document.getElementById("fronthair")
let backhairitem = document.getElementById("backhair")

function saveData() {
    localStorage.setItem("outfit", JSON.stringify(outfit));
    console.log("Outfit saved!");
}

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
    saveData()
}

function wearpant(item){
    if (bottoms[0]==outfit.bottom){
        outfit.bottom= bottoms[item];
    }
    else if (bottoms[item]==outfit.bottom){
        outfit.bottom= bottoms[0]
    }
    else {
        outfit.bottom=bottoms[item]
    }
    bottomitem.src= outfit.bottom
    console.log(outfit);
    saveData()
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


function loadData(){
    let saved = localStorage.getItem("outfit");
    if (saved){
        outfit= JSON.parse(saved);
    }
    console.log(saved);
    topitem.src = outfit.top;
    bottomitem.src = outfit.bottom;
    fronthairitem.src = outfit.fronthair;
    backhairitem.src = outfit.backhair;
}

loadData()

