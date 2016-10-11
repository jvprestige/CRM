﻿function BLLAval() {
    
   
    var WsAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListAval");
    var WsAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listambiente");
    var WsItems = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listitemxambiente");


    BLLAval.prototype.Aval = function (referencia) {

        jsonData = "{ 'id':" + JSON.stringify(referencia) + " }";

        $.ajax({
            type: "POST", url: WsAval, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {
                 
                    $("#TxtRegistro").val(result.d[0].Registro);
                    $("#TxtProyecto").val(result.d[0].NOMBRE_PROYEC);
                    $("#TxtInmueble").val(result.d[0].INMUEBLE);
                    
                    

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.prototype.ListadoAmbientes = function () {

        $.ajax({
            type: "POST", url: WsAmbiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    BLLAval.CrearAmbientes(result.d);



                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.CrearAmbientes = function (ambientes) {
        var tabla = document.getElementById('myTab1').innerHTML = "";
        var tabla1 = document.getElementById('tabs').innerHTML = "";
      
     //  tabla.innerHTML = "";
       
        $.each(ambientes, function (i, item) {
            if (i == 0) 
            {

                tabla += "<li class='active'><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + item.Ambiente1 + "</a></li>";
               
            } else

            {
                tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + item.Ambiente1 + "</a></li>";

            }
           

        });

        $.each(ambientes, function (i, item) {
            if (i == 0) {
                tabla1 += "<div id='" + item.Id + "'class='tab-pane active'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='ITEM"+item.Id+"'></div>";
               
                llamar(item);
                tabla1 += "</div>";
                tabla1 += "</div>";
            } else {

                tabla1 += "<div id='" + item.Id + "'class='tab-pane'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='ITEM" + item.Id + "'></div>";
                 llamar(item);
                tabla1 += "</div>";
                tabla1 += "</div>";
            }
           
        });

        $('#myTab1').append(tabla);
        $('#tabs').append(tabla1);
                                  
    }

    function llamar(item) {

        var datos = "{ 'id':" + JSON.stringify(item.Id) + " }";
        $.ajax({
            type: "POST", url: WsItems, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success: function (result) {
                if (result.d != null) {

                    BLLAval.CrearTablaItems(result.d);



                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.CrearTablaItems = function (items) {
        
        document.getElementsByClassName("ITEM" + items[0].Idambiente).innerHTML = "";
        var tabla = '<table id="example3" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Consecutivo</th>";
        tabla += "<th>Item</th>";
        tabla += "<th>Cumple</th>";
        tabla += "<th>Observaciones</th>";
        tabla += "<th>F.Compromiso</th>";
        tabla += "<th>Recibo a satisfación</th>";
        tabla += "<th>Aprobación</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(items, function (i, item) {
           
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.Consecutivo + "</td>";
            tabla += "<td style=''>" + item.Item + "</td>";
            tabla +="<td><input type='radio' name='gender' value='male'> Si<br><input type='radio' name='gender' value='female'>No<br></td>"
            tabla += "<td><textarea></textarea></td>"
            tabla += "<td></td>"
            tabla += "<td></td>"
            tabla += "<td><input type='radio' name='gender' value='male'> Si<br><input type='radio' name='gender' value='female'>No<br></td>"
            
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
       
        $(".ITEM"+items[0].Idambiente).append(tabla);
        //$('#example3').dataTable();


    }

}