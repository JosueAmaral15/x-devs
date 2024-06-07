function toNextElement(){
    const selected = document.getElementsByClassName("selecionado")[0];
    let next = selected.nextElementSibling;
    if (next == null) {
        list = document.getElementsByClassName("lista-personagens")[0];
        next = list.firstElementChild;
    }
    next.classList.add("selecionado");
    selected.classList.remove("selecionado");
}

function toPreviousElement(){
    const selected = document.getElementsByClassName("selecionado")[0];
    let previous = selected.previousElementSibling;
    if (previous == null){
        list = document.getElementsByClassName("lista-personagens")[0];
        previous = list.lastElementChild;
    }
    selected.classList.remove("selecionado");
    previous.classList.add("selecionado");
}