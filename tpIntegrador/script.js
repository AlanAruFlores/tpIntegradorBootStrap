const VALORTICKET = 200;

function presionarComprar(){
    let porcentaje = tenerPorcentajeCorrespondiente();
    let importeTotal = 0;
    let spanMensaje = document.getElementById("mensajeCompra");
    let importeMensaje = document.getElementById("totalPagar");
    if(document.getElementById("cantidad").value > 0){
         importeTotal = sacarImporte(porcentaje);
         spanMensaje.innerHTML = "COMPRA EXITOSA";
        importeMensaje.innerHTML=importeTotal;
    }
    else{
        alert("ERROR, USTED INGRESO UNA CANTIDAD MENOR O IGUAL A 0");
        spanMensaje.innerHTML="COMPRA NO EXITOSA";
        importeMensaje.innerHTML =  importeTotal;
        document.getElementById("campoImporte").style.color = dark;
    }

    function sacarImporte(porcentaje){
        let cantidad = document.getElementById("cantidad");
        return (VALORTICKET*porcentaje) * cantidad.value;
    }
    function tenerPorcentajeCorrespondiente(){
        let categoriaSeleccionada = document.getElementById("categorias");
        let porcentajeCorrespondiente = 0;

        if(categoriaSeleccionada.value == 1){
            porcentajeCorrespondiente = 0.8;
        }
        else{
            if(categoriaSeleccionada.value==2){
                porcentajeCorrespondiente = 0.5;
            }
            else{
                porcentajeCorrespondiente=0.15;
            }
        }
        return porcentajeCorrespondiente;
    }
}