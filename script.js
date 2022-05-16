
document.getElementById("inputSearch").addEventListener("keyup",buscador_interno);


function ocultar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value ="";
    Box_search.style.display = "none";
}

function buscador_interno(){
// devolver palabra a mayuscula
filtro = inputSearch.value.toUpperCase();
// caja de busqueda alamcena los LI, obtener etiquetas dentro de ese recuadro etiqueta LI
li = Box_search_getElementsByTagName("li");

//recorriendo elemementos a filtrar mediante los LI

for (i=0; i< li.length; i++){
    a=li[i].getElementByTagName("a")[0];
    textValue = a.textContent || a.innertext;

    if(textValue.toUpperCase().indexOf(filtro) > -1){
        li[i].style.display = "";
        Box_search.style.display = "block";

        if(inputSearch.value === ""){
            Box_search.style.display = "none";
        }
    }else{
        li[i].style.display = "none";
    }
}

}