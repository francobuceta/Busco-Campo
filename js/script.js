//Menu hamburguesa
function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;
    d.addEventListener("click", e=> {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("panel-active");
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("panel-active");
        }
    })
}

document.addEventListener("DOMContentLoaded", e=> {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
})


//Bucador

let barSearch = document.getElementById("search");
let inputSearch = document.getElementById("inputSearch");
let boxSearch = document.getElementById("cuadro-de-busquedas");

function buscadorInterno() {
    let filtro = inputSearch.value.toUpperCase();
    let lista = boxSearch.getElementsByTagName("li");

    for (let i = 0; i < lista.length; i++) {
        let a = lista[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filtro) > -1) {
            lista[i].style.display = "";
            boxSearch.style.display = "block";

            if (inputSearch.value === "") {
                boxSearch.style.display = "none";
            }

        } else {
            lista[i].style.display = "none";
        }
    }
}

document.getElementById("inputSearch").addEventListener("keyup", buscadorInterno);
