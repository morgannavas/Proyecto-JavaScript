import { carouselImageText }from './sources/carousel.js';
window.addEventListener('DOMContentLoaded', () =>{
    carouselImageText()
})

import { cargarNoticias } from './sources/noticias.js';
window.addEventListener('load', cargarNoticias)

import { mostrarNoticias } from './sources/noticias.js';
window.addEventListener('load', mostrarNoticias)

import { galeriaDinamica } from './sources/carousel.js';
window.addEventListener('load', galeriaDinamica)


import { mostrarGaleria } from './sources/carousel.js';
window.addEventListener('scroll', mostrarGaleria)












