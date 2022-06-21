const TOPOBUTTON= document.querySelector("#botao-topo");
const SLIDER= document.querySelector("#slides");

window.onscroll= () => {

    const distancia= SLIDER.scrollHeight;
    
    if(document.body.scrollTop > distancia 
        || document.documentElement.scrollTop > distancia)
            TOPOBUTTON.classList.remove("invisible");
    else
        TOPOBUTTON.classList.add("invisible");
};