$(function(){
    agregarUsuario();
    editarUsuario();
    guardarEdicionUsuario();
    eliminar();
});

function agregarUsuario() {
    $('form input[type=submit]').on('click', function(e){
        e.preventDefault();
        var socio = $('#socio');
        var nombre = $('#nombre');
        var estatura = $('#estatura');
        var edad = $('#edad');
        var localidad = $('#localidad');
        $('#u-tabla').append('<tr class="centrar-texto jugador" >'+
            '<td>'+socio.val()+'</td>'+
            '<td>'+nombre.val()+'</td>'+
            '<td>'+estatura.val()+'</td>'+
            '<td>'+edad.val()+'</td>'+
            '<td>'+localidad.val()+'</td>'+
            '<td><input type="submit" name="edit" class="editar boton" value="Modificar">' +
            '<input type="submit" class="eliminar boton" value="Eliminar"></td>' +
            '</tr>'
        );

        socio.val('');
        nombre.val('');
        estatura.val('');
        edad.val('');
        localidad.val('');
    })
}

function editarUsuario(){
    $('#u-tabla').on('click', '.editar', function(e){
        e.preventDefault();
        var tr = $(this).closest('tr');
        var tdSocio = tr.children('td:nth-child(1)');
        var tdNombre = tr.children('td:nth-child(2)');
        var tdEstatura = tr.children('td:nth-child(3)');
        var tdEdad = tr.children('td:nth-child(4)');
        var tdLocalidad = tr.children('td:nth-child(5)');
        var tdOpciones = tr.children('td:nth-child(6)');

        var aSocio = tdSocio.html();
        tdSocio.html('<input type="number" name="socio" id="socio" size="5" min="0" max="999" value="'+aSocio+'">')
        var aNombre = tdNombre.html();
        tdNombre.html('<input type="text" name="nombre" id="nombre" value="'+aNombre+'">')
        var aEstatura = tdEstatura.html();
        tdEstatura.html('<input type="number" name="estatura" id="Estatura" size="5" min="0" max="999" value="'+aEstatura+'">')
        var aEdad = tdEdad.html();
        tdEdad.html('<input type="number" name="edad" id="edad" size="5" min="0" max="999" value="'+aEdad+'">')
        var aLocalidad = tdLocalidad.html();
        tdLocalidad.html('<input type="text" name="localidad" id="localidad" value="'+aLocalidad+'">')

        tdOpciones.html("<a href='#' class='guardar button'>Guardar</a>" +
        "<a href='#' class='eliminar button'>Eliminar</a>");

    } )
}

function guardarEdicionUsuario() {
    $('#u-tabla').on('click', '.guardar', function(e) {
        e.preventDefault();
        var tr = $(this).closest('tr');
        var tdSocio = tr.children('td:nth-child(1)');
        var tdNombre = tr.children('td:nth-child(2)');
        var tdEstatura = tr.children('td:nth-child(3)');
        var tdEdad = tr.children('td:nth-child(4)');
        var tdLocalidad = tr.children('td:nth-child(5)');
        var tdOpciones = tr.children('td:nth-child(6)');

        nuevoSocio = tdSocio.children("input[type=number").val();
        tdSocio.html(nuevoSocio)
        nuevoNombre = tdNombre.children("input[type=text]").val();
        tdNombre.html(nuevoNombre);
        nuevoEstatura = tdEstatura.children("input[type=number").val();
        tdEstatura.html(nuevoEstatura)
        nuevoEdad = tdEdad.children("input[type=number").val();
        tdEdad.html(nuevoEdad)
        nuevoLocalidad = tdLocalidad.children("input[type=text]").val();
        tdLocalidad.html(nuevoLocalidad);

        tdOpciones.html("<a href='#' class='editar button'>Editar</a>" +
            "<a href='#' class='eliminar button'>Eliminar</a>");
    });
}

function eliminar() {
    $('#u-tabla').on('click', '.eliminar', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
    });
}

