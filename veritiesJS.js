function changingPictureOVER(id,pic2){
    document.getElementById(id).src=pic2;
}
function changingPictureOUT(id,pic1){
    document.getElementById(id).src=pic1;
}
document.getElementById("glovesimg").addEventListener("mouseover",()=> {
    changingPictureOVER('glovesimg','Images/gloves2.jpg');
})
document.getElementById("glovesimg").addEventListener("mouseout",()=> {
    changingPictureOUT("glovesimg",'Images/equipmment.jpg');
})


document.getElementById("footballimg").addEventListener("mouseover",()=> {
    changingPictureOVER('footballimg','Images/football02.jpg');
})
document.getElementById("footballimg").addEventListener("mouseout",()=> {
    changingPictureOUT("footballimg",'Images/football.png');
})


document.getElementById("shirtimg").addEventListener("mouseover",()=> {
    changingPictureOVER('shirtimg','Images/shirt.jpeg');
})
document.getElementById("shirtimg").addEventListener("mouseout",()=> {
    changingPictureOUT('shirtimg','Images/shirt.webp');
})


document.getElementById("bootimg").addEventListener("mouseover",()=> {
    changingPictureOVER('bootimg','Images/shoes3.jpg');
})
document.getElementById("bootimg").addEventListener("mouseout",()=> {
    changingPictureOUT('bootimg','Images/shoes2.jpeg');
})
