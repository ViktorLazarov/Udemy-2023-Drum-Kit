for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", () => {
        
        let btnTxt = document.querySelectorAll("button")[i].innerHTML;
        let link = "";
        switch (btnTxt) {
            case "W": link = "sounds/tom-1.mp3"; break;
            case "A": link = "sounds/tom-2.mp3"; break;
            case "S": link = "sounds/tom-3.mp3"; break;
            case "D": link = "sounds/tom-4.mp3"; break;
            case "J": link = "sounds/snare.mp3"; break;
            case "K": link = "sounds/crash.mp3"; break;
            case "L": link = "sounds/kick-bass.mp3"; break;
        }

        let audio = new Audio(link)
        audio.play();

    });
}

