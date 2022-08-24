function comprobar_conexion(){
    console.log("page loaded...");

}

function cambiar_imagen(elemento){
    console.log(elemento.src);
    // elemento.src = 'assets/hula_loop_octodex03.gif'
    if (elemento.src == 'http://127.0.0.1:5501/W2S3/assets/yogitocat.png'){
        elemento.src = 'assets/hula_loop_octodex03.gif';
    }
    else {
        elemento.src = 'assets/yogitocat.png';
    }
}

// function volver_imagen_original(elemento){
//     elemento.src = 'assets/yogitocat.png'

// }
