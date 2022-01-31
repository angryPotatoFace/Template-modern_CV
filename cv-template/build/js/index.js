document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});


function iniciarApp(){
    //crearGaleria();
    scrollControl();
    selectProject();
}   


function scrollControl(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView( {behavior: "smooth"});

        });
    });
}

function crearGaleria(){

    const galeria = document.querySelector(".galeria-imagenes");

    for (let index = 1; index <= 12; index++) {
        let imagenes = document.createElement('picture');
        imagenes.innerHTML = `    
        <source srcset="build/img/thumb/${index}.webp" type="image/webp" alt="Imagen Vocalista Festival"> 
        <img loading="lazy" src="img/thumb/${index}.jpg" alt="Imagen Vocalista Festival"> `;
        imagenes.onclick = function (){
            overlay(index);
        }
        galeria.appendChild(imagenes);        
    }
}


function overlay(id){
    //Crea el elemento
    const imagen = document.createElement('picture');
    
    //Setea los atributos
    imagen.className = "imagenAgregada";
    imagen.innerHTML = `    
    <source srcset="build/img/grande/${id}.webp" type="image/webp" alt="Imagen Vocalista Festival"> 
    <img loading="lazy" src="img/grande/${id}.jpg" alt="Imagen Vocalista Festival"> `;
    
    // Cerrar la imagen cuando se le hace click
    imagen.onclick = function(){
        imagen.remove();
        body.classList.remove('detenerScroll');
    }

    //Agregar la imagen al body 
    const body = document.querySelector('body');
    body.classList.add('detenerScroll');
    body.appendChild(imagen);
}



// ------ Control Galeria Projects -----------------

function selectProject(){

    const projects = document.querySelectorAll(".categories");
    console.log(projects);
}