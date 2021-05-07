

function initElement(){
    var bouton = document.getElementById("button");
    bouton.onclick = showResult;

}

function tagRandom(){
    listTag = ["Fiz#7180", "Fay'#1899", "Nekozilla#6018", "Miloser#7022", "Hunter#4908", "R.E.D.#4806", "L'Aura Maline#4416", "Nyu#1460"];
    let randIndex = Math.floor(Math.random() * 5);
    return listTag[randIndex];
}

function generateTagBox(){
    var tagBox = document.createElement('div');
    tagBox.setAttribute("id", "tag-box");
    tagBox.setAttribute("class", "tag-box");

    var tag = document.createElement('p');
    tag.setAttribute("class", "tag");
    var contenu = document.createTextNode(tagRandom());
    tag.appendChild(contenu);
    tagBox.appendChild(tag);

    playSound();
    return tagBox;
}

function showResult(){
    var flexContainer = document.getElementById("flex-container");


    if(document.getElementById("tag-box") == undefined){
        flexContainer.appendChild(generateTagBox())       

    }else{  
        flexContainer.replaceChild(generateTagBox(),document.getElementById("tag-box")); 
    }
    
}

function playSound(){
    var audio = new Audio("clic.mp3");
    audio.currentTime = 0;
    audio.play();
}