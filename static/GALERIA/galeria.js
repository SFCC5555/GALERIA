let m=document.getElementById("menu");
let gi=document.querySelector(".galeriaIlustraciones");
let gs=document.querySelector(".galeriaStoryBoards")

function mostrarMenu() {
    m.classList.toggle("menuContainer")
}

function audio()
{
    a= document.createElement("audio");
    a.setAttribute("src", "/static/GALERIA/AUDIO/THANKYOU.mp3");
    a.play();
}


/*CONSTRUCTOR ILUSTRACIONES*/

const ilustrationList =[];

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/CHICAZSFCC.png",
    name: "zorra",
});

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/CONCEPTARTWARGAMESFCC.png",
    name: "WarWolf",
});

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/GATO GAMER SFCC.png",
    name: "gato",
});

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/SVSFCC.png",
    name: "sfcc",
});

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/VIRGEN MARIA FINALSFCC.png",
    name: "Virgen María",
});

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/PABLO ESCOBARSFCC.png" ,
    name: "Pablo Escobar",
});

ilustrationList.push({
    image: "static/GALERIA/IMAGENES/INOSUKE.png",
    name: "Inosuke",
});


/*CONSTRUCTOR STORYBOARDS*/

const storyBoardList =[];

storyBoardList.push({
    image: "static/GALERIA/IMAGENES/57  Fenix ademan, logo 2.0.png",
    contenido:"static/GALERIA/IMAGENES/STORYBOARD BONDED TRAILER SFCC.pdf",
    name: "Bonded",
});



/*<div>
    <a href="static/GALERIA/IMAGENES/CHICAZSFCC.png"  target="_BLANK">
        <img src="static/GALERIA/IMAGENES/CHICAZSFCC.png" alt="zorra" width=75%/>
    </a>
    <div class="boton">
        <button onclick="audio();">COMPRAR</button>
    </div>
</div>
*/


function renderIlustrations()
{

    for (ilustration of ilustrationList) {
        contenedorIlustration=document.createElement("div");
        linkIlustration=document.createElement("a");
        linkIlustration.setAttribute("href",ilustration.image);
        linkIlustration.setAttribute("target","_BLANK");
        imagenIlustration=document.createElement("img");
        imagenIlustration.setAttribute("src",ilustration.image);
        imagenIlustration.setAttribute("alt",ilustration.name);
        imagenIlustration.setAttribute("width","75%");
        
        contenedorBoton=document.createElement("div");
        contenedorBoton.setAttribute("class","botonInactivo");
        botonComprar=document.createElement("button");
        botonComprar.setAttribute("onclick","audio();");
        botonComprar.innerText="COMPRAR"
        
       
       
        gi.appendChild(contenedorIlustration);
        contenedorIlustration.appendChild(linkIlustration);
        linkIlustration.appendChild(imagenIlustration);
    
        contenedorIlustration.appendChild(contenedorBoton);
        contenedorBoton.appendChild(botonComprar);
    }

}

function renderStoryBoards()
{

    for (storyBoard of storyBoardList) {
        contenedorStoryBoard=document.createElement("div");
        linkStoryBoard=document.createElement("a");
        linkStoryBoard.setAttribute("href",storyBoard.contenido);
        linkStoryBoard.setAttribute("target","_BLANK");
        imagenStoryBoard=document.createElement("img");
        imagenStoryBoard.setAttribute("src",storyBoard.image);
        imagenStoryBoard.setAttribute("alt",storyBoard.name);
        imagenStoryBoard.setAttribute("width","75%");
        
        contenedorBoton=document.createElement("div");
        contenedorBoton.setAttribute("class","botonInactivo");
        botonComprar=document.createElement("button");
        botonComprar.setAttribute("onclick","audio();");
        botonComprar.innerText="COMPRAR"
        
       
       
        gs.appendChild(contenedorStoryBoard);
        contenedorStoryBoard.appendChild(linkStoryBoard);
        linkStoryBoard.appendChild(imagenStoryBoard);
    
        contenedorStoryBoard.appendChild(contenedorBoton);
        contenedorBoton.appendChild(botonComprar);
    }

}

renderIlustrations();

renderStoryBoards();