var images = [
    {
        title:"Image 1",
        link:'images/AdAddnAddy.jpg'
    },
    {
        title:"Image 2",
        link:'images/gaming.jpg'
    },
    {
        title:"Image 3",
        link:'images/CodeALine.jpg'
    },
    {
        title:"Image 3",
        link:'images/Crossword.jpg'
    }


]
window.onload  = function(){

    
    var fileSelector = document.getElementById('fileSelector');
    
    var galleryContainer = document.getElementById("galleryContainer");
    var galleryItems;
    var items = "";
    for(var i=0;i<images.length;i++){
        items = items + `<div class="galleryItem" onClick="openImage(`+ i +`)">
                            <div class="overlay">
                                <h2 id="title">`+ images[i].title +`</h2>
                            </div>
                        </div>`;
    }
    galleryContainer.innerHTML = items;
    for(var i=0;i<images.length;i++){
        console.log(galleryContainer.children[i]);
        galleryContainer.children[i].style.backgroundImage = "url("+images[i].link+")";
    }
    var openContainer = document.getElementById("openContainer"); 
    var closeButton = document.getElementById("closeButton"); 
    var image = document.getElementById("image");
    var imageTitle = document.getElementById("imageTitle");
}
fileSelector.addEventListener("change",function(input){
    
    var storageRef = firebase.storage().ref();
    console.log(fileSelector.files);

    for (var i = 0; i < fileSelector.files.length; i++) {
        storageRef.child(fileSelector.files[i].name).put(fileSelector.files[i]).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
        });
    }
    
})
function openImage(imageNumber){
    openContainer.style.marginLeft = "0";
    imageTitle.innerHTML = images[imageNumber].title;
    image.setAttribute("src",images[imageNumber].link);
};

function closeImage(){
    imageTitle.innerHTML = "";
    openContainer.style.marginLeft = "100%";
    image.setAttribute("src","");
};