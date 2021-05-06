

function initElement(){
    var bouton = document.getElementById("button");
    bouton.onclick = showResult;
}

function tagRandom(){
    listTag = ["Fiz#7180", "Fay'#1899", "Nekozilla#6018", "Miloser#7022", "Hunter#4908"];
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