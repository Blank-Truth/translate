const Button = document.getElementById("button") 
const Picture = document.getElementById("image")
const source = "../images/Bill Cypher.jpg" 
console.log(source)

Button.addEventListener("click", () => {
    const newImage = document.createElement("img")
    newImage.src = source
    document.body.appendChild(newImage)
    document.getElementById("box").appendChild(newImage)
    newImage.style.position = "absolute"
    newImage.style.opacity = "40%"
    newImage.style.top = "50px"
    newImage.style.left = "100px"
    newImage.style.zIndex = "1"
    newImage.style.height = "100px"
    newImage.style.width = "150px"
    Picture.style.transform = "translate(30px, 30px)"
    Picture.style.transition = 'transform 0.5s ease'

})