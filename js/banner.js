let time = 3000
let currentImageIndex = 0
let img = document.querySelectorAll('#slid img')
let max = img.length 


function nextImage() {

    img[currentImageIndex].classList.remove("selected")    

    currentImageIndex++

    if (currentImageIndex >= max){
    currentImageIndex = 0}
    
    img[currentImageIndex].classList.add("selected")
   
}

function start (){
    setInterval(() => {
        nextImage()
    },time)
}

window.addEventListener('load', start)