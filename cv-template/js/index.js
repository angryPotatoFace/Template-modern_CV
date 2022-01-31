document.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
});


function iniciarApp(){
    typeWriter();
    selectProjects();
}   

//---------------- Function to Typewrite Effect -----------
var i = 0;
var txt = `I'm a Software Developer and student from Argentina.
I'm looking for my next project and developer team to improve my technical skill and keep learning about different technologies. I was working with agile methodoligies and as a front end. I'm next to finish my university studies and I want get a solid experience in the developement area.`;
var speed = 50;

function typeWriter (){
   
    if (i < txt.length) {
    document.querySelector("#mySelf-about-me-description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
};

//---------------- Function to Typewrite Effect -----------


// --- Water Fluid Efect ----------------

$(document).ready(function(){
    $('.contenido-header').ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.03
    })
})
  // --- Water Fluid Efect ----------------


  // --- Slide Efect -----

  $(".carousel-inner > div:gt(0)").hide();

  setInterval(function() { 
    $('.carousel-inner > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.carousel-inner');
  }, 7000);

  // --- Slide Efect -----


function selectProjects(){
    const projects = document.querySelectorAll(".categories");
    let clicked = [projects.length];
    for (let i = 0; i < projects.length; i++) {
        clicked[i] = false;
        projects[i].addEventListener('click', event => {
            const a = event.target;
            getProjects(a);
        });
    }
}


const projects = document.querySelectorAll('.p-0');
const projectFather = document.querySelector('.myProjects__images');

function getProjects(item){
    const id = item.textContent;
    switch (id){
        case 'All': 
                    $('.p-0').remove();
                    for (let i = 0; i < projects.length; i++) {
                        projectFather.appendChild(projects[i]);   
                    }
                    break;
        case 'UI/UX Design':
                    $('.p-0').remove();
                    projectFather.appendChild(projects[2]);
                    break;
        case 'Frontend':
                    $('.p-0').remove();
                    projectFather.appendChild(projects[0]);
                    projectFather.appendChild(projects[1]);
                    break;
        case 'Backend':  
                    $('.p-0').remove();
                    projectFather.appendChild(projects[3]);
                    projectFather.appendChild(projects[4]);
                    break;
    }
}