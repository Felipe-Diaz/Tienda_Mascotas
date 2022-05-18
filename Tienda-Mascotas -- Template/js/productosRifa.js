
$(document).ready(function(){
    flag=true;
    
    $("#btnVer").click(function(){
        
        if(flag){
        $.get("https://fakestoreapi.com/products",
        function(data) {
            $("#productos").html('<table class="table"><thead><tr><th style="text-align: center;">#</th><th style="text-align: center;">Imagen</th><th style="text-align: center;">Producto</th><th style="text-align: center;">Descripción</th></tr></thead></table>');
            cont=0;
            $.each(data,
                function(i, item){
                    cont++;
                        var fila = `
                                <tr vertical-align="middle" style="border: 1px solid black;">
                                    <td style="border:1px black length:5px" class="col-lg-1">
                                        <h4 style="text-align: center;">${cont}</h4>
                                    </td>
                                    <td style="border: 1px black; text-align: center;" class="col-lg-2"  >
                                        <img src="${item.image}"  style="width: 80px" &nbsp&nbsp>
                                    </td>
                                    <td style="border: 1px black" class="col-lg-3">
                                        ${item.title}
                                    </td>
                                    <td class="col-lg-5">
                                        ${item.description}
                                    </td>
                                </tr>
                            `;
                        $("#productos").append(fila);
                });
            });        
        $("#btnVer").html("Dejar de Ver");
        }
        else if(!flag){
            $("#productos").html("<table><tr><td></td></tr></table>");
            $("#btnVer").html("Ver Premios")
        }
        flag=!flag;
    });
});