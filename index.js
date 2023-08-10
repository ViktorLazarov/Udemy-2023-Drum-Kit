for (let i = 0; i < 7; i++) {
    // Listens for a button press
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {

        let btnTxt = document.querySelectorAll(".drum")[i].innerHTML;
        // let buttonInnerHtml = this.innerHTML; ***doesn't work***
        
        let audio = new Audio(makeSound(btnTxt))
        audio.play();

    });
}
// Listens for a keyboard button press
document.addEventListener("keypress", function (event) {
    
    let audio = new Audio(makeSound(event.key.toUpperCase()));
        audio.play();
    
})

// Receives the key or the button that was pressed and 
// creates a link for the creation of the Audio Object
function makeSound(text) {
    
    let link = "";

    switch (text) {
        case "W": link = "sounds/tom-1.mp3"; break;
        case "A": link = "sounds/tom-2.mp3"; break;
        case "S": link = "sounds/tom-3.mp3"; break;
        case "D": link = "sounds/tom-4.mp3"; break;
        case "J": link = "sounds/snare.mp3"; break;
        case "K": link = "sounds/crash.mp3"; break;
        case "L": link = "sounds/kick-bass.mp3"; break;
    }
    return link;
}

