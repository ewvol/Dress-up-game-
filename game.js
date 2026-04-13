let outfit = {
    fronthair: "Assets/frontbraids.png",
    backhair: "Assets/backbraids.png",
    top: "Assets/none.png", 
    bottom: "Assets/none.png",
    shoes: "Assets/none.png",
    accessories: "Assets/none.png",
    tucked: false
}
const shirts = ["Assets/none.png", "Assets/starShirt.png", "Assets/frillyBlouse.png","Assets/whiteBlouse.png"];
const bottoms = ["Assets/none.png","Assets/longSkirt.png", "Assets/blackWhiteSkirt.png"];
const accessories = ["Assets/none.png"]

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

function clearOutfit(){
    outfit.top = shirts[0];
    outfit.bottom =  bottoms[0];
    
    topitem.src= outfit.top;
    bottomitem.src = outfit.bottom;
    console.log(outfit);
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

    if (outfit.tucked){
    topitem.style.zIndex = "2"
    bottomitem.style.zIndex = "3"
    }
}

function tuckIn(){
    let button = document.getElementById("tuck");

    if (!outfit.tucked){
    outfit.tucked=true
    topitem.style.zIndex = "2"
    bottomitem.style.zIndex = "3"
      button.innerText = "Tuck Out"
    console.log("tucked in!")
    }
    else{
    outfit.tucked=false
    topitem.style.zIndex = "3"
    bottomitem.style.zIndex = "2"
    button.innerText = "Tuck In"
    console.log("tucked out!")
    }

    saveData()
}

loadData()

