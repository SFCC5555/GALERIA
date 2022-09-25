let m=document.getElementById("menu");

function mostrarMenu() {
    m.classList.toggle("menuContainer")
}

function audio()
{
    a= document.createElement("audio");
    a.setAttribute("src", "/static/GALERIA/AUDIO/THANKYOU.mp3");
    a.play();
}

