const imageContainer=document.querySelector(".container");

const element =document.querySelector(".btn");

element.addEventListener("click",()=>{
    imageNum=10;
    addNewImages();
    console.log(click);
})

function addNewImages(){
    for(i=0; i<imageNum;i++){

        const newImage=document.createElement("img");

        newImage.src=`https://picsum.photos/200/300?random=${Math.floor(Math.random()*1000)}`

        imageContainer.appendChild(newImage);

    }
}