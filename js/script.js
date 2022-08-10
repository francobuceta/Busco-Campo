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
