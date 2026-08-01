/*==================================================
        LUISA DESIGN
        SCRIPT PROFESIONAL v2.0
==================================================*/

"use strict";

/*==================================================
            SELECTORES
==================================================*/

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/*==================================================
            VARIABLES
==================================================*/

const body = document.body;
const header = $("#header");
const preloader = $("#preloader");
const cursor = $(".cursor");
const cursor2 = $(".cursor2");
const btnSubir = $(".btn-subir");
const menuBtn = $(".menu-mobile");
const nav = $("nav");
const formulario = $("form");

/*==================================================
            PRELOADER
==================================================*/

window.addEventListener("load", () => {

    if (!preloader) return;

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

        body.classList.add("loaded");

    }, 600);

});

/*==================================================
        CURSOR PERSONALIZADO
==================================================*/

if (cursor && cursor2) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        cursor2.style.left = e.clientX + "px";
        cursor2.style.top = e.clientY + "px";

    });

    $$("a,button,.servicio,.proyecto,.certificado").forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor2.classList.add("cursor-hover");

        });

        item.addEventListener("mouseleave", () => {

            cursor2.classList.remove("cursor-hover");

        });

    });

}

/*==================================================
            HEADER
==================================================*/

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==================================================
        BOTON SUBIR
==================================================*/

window.addEventListener("scroll", () => {

    if (!btnSubir) return;

    if (window.scrollY > 500) {

        btnSubir.classList.add("visible");

    } else {

        btnSubir.classList.remove("visible");

    }

});

/*==================================================
        SCROLL SUAVE
==================================================*/

$$('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = $(this.getAttribute("href"));

        if (!destino) return;

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/*==================================================
            MENU MOVIL
==================================================*/

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("activo");

        menuBtn.classList.toggle("abierto");

    });

    $$("nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("activo");

            menuBtn.classList.remove("abierto");

        });

    });

}
/*==================================================
            SCROLL SPY
==================================================*/

const sections = $$("section");
const navLinks = $$("nav a");

const activarMenu = () => {

    let current = "";

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (top >= offset && top < offset + height) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("activo");
        }

    });

};

window.addEventListener("scroll", activarMenu);

/*==================================================
            CONTADORES
==================================================*/

const counters = $$(".numero");

const contadorObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.ceil(target / 120);

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.innerText = current;

        }, 18);

        contadorObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => contadorObserver.observe(counter));

/*==================================================
        ANIMACIONES SCROLL
==================================================*/

const revealItems = $$(
`
.servicio,
.contador,
.proyecto,
.certificado,
.testimonio,
.skill,
.sobre-grid,
.contacto-grid
`
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.18

});

revealItems.forEach(item=>{

item.classList.add("animar");

revealObserver.observe(item);

});

/*==================================================
            PARALLAX HERO
==================================================*/

const heroImage = $(".hero-imagen");

window.addEventListener("scroll",()=>{

if(!heroImage) return;

const y = window.scrollY;

heroImage.style.transform =

`translateY(${y*0.18}px)`;

});

/*==================================================
            TYPED JS
==================================================*/

if($(".typed")){

new Typed(".typed",{

strings:[

"Diseñadora Gráfica",

"Branding",

"Diseño Web",

"UX / UI",

"Multimedia",

"Social Media"

],

typeSpeed:70,

backSpeed:45,

backDelay:1800,

loop:true,

showCursor:true,

cursorChar:"|"

});

}

/*==================================================
            PARTICLES
==================================================*/

if(typeof particlesJS !== "undefined"){

particlesJS("particles-js",{

particles:{

number:{
value:65
},

color:{
value:"#8B5CF6"
},

shape:{
type:"circle"
},

opacity:{
value:.35
},

size:{
value:3
},

move:{
enable:true,
speed:1.4
},

line_linked:{

enable:true,

distance:160,

color:"#8B5CF6",

opacity:.20,

width:1

}

},

interactivity:{

events:{

onhover:{

enable:true,

mode:"grab"

},

onclick:{

enable:true,

mode:"push"

}

},

modes:{

grab:{

distance:180,

line_linked:{
opacity:.45
}

},

push:{

particles_nb:4

}

}

},

retina_detect:true

});

}
/*==================================================
            FILTRO PORTAFOLIO
==================================================*/

const filtros = document.querySelectorAll(".filtros button");
const proyectos = document.querySelectorAll(".proyecto");

if(filtros.length){

    filtros.forEach(btn=>{

        btn.addEventListener("click",()=>{

            filtros.forEach(b=>b.classList.remove("activo"));

            btn.classList.add("activo");

            const filtro = btn.dataset.filter;

            proyectos.forEach(item=>{

                if(filtro==="all"){

                    item.style.display="block";

                    setTimeout(()=>{

                        item.style.opacity="1";
                        item.style.transform="scale(1)";

                    },100);

                    return;

                }

                if(item.classList.contains(filtro)){

                    item.style.display="block";

                    setTimeout(()=>{

                        item.style.opacity="1";
                        item.style.transform="scale(1)";

                    },100);

                }else{

                    item.style.opacity="0";
                    item.style.transform="scale(.8)";

                    setTimeout(()=>{

                        item.style.display="none";

                    },250);

                }

            });

        });

    });

}

/*==================================================
            LIGHTBOX
==================================================*/

const lightbox = $("#lightbox");
const lightboxImg = $("#imagen-lightbox");
const cerrarLightbox = $("#cerrar-lightbox");

$$(".ver-proyecto").forEach(item=>{

    item.addEventListener("click",(e)=>{

        e.preventDefault();

        lightbox.classList.add("activo");

        lightboxImg.src=item.href;

        body.style.overflow="hidden";

    });

});

if(cerrarLightbox){

    cerrarLightbox.addEventListener("click",()=>{

        lightbox.classList.remove("activo");

        body.style.overflow="auto";

    });

}

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("activo");

            body.style.overflow="auto";

        }

    });

}

/*==================================================
                EFECTO 3D
==================================================*/

$$(".servicio,.proyecto,.certificado,.testimonio").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*18;
        const rotateX=((y/rect.height)-0.5)*-18;

        card.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=
        "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    });

});

/*==================================================
                LAZY LOAD
==================================================*/

const imagenes=document.querySelectorAll("img");

const lazy=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.src=img.dataset.src || img.src;

img.classList.add("loaded");

lazy.unobserve(img);

}

});

});

imagenes.forEach(img=>lazy.observe(img));

/*==================================================
                TOAST
==================================================*/

function mostrarToast(texto){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=`

<i class="fas fa-check-circle"></i>

<span>${texto}</span>

`;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("mostrar");

},100);

setTimeout(()=>{

toast.classList.remove("mostrar");

setTimeout(()=>{

toast.remove();

},500);

},3000);

}

/*==================================================
            FORMULARIO
==================================================*/
if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        emailjs.sendForm(
            "service_2jqntpq",
            "template_s02xl68",
            formulario
        )
        .then(() => {

            mostrarToast("Mensaje enviado correctamente.");
            formulario.reset();

        })
        .catch((error) => {

    console.log(error);
    mostrarToast("Error al enviar el mensaje.");

});

    });

}
/*==================================================
            OPTIMIZACIÓN
==================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("ready");

});

console.log("%cLuisa Design",
"font-size:22px;color:#8B5CF6;font-weight:bold;");

console.log("%cSitio desarrollado profesionalmente.",
"color:#00C896;font-size:14px;");