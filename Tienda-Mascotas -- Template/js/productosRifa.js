
$(document).ready(function(){
    flag=true;
    $("#btnVer").click(function(){
        
        if(flag){
        $.get("https://fakestoreapi.com/products",
        function(data) {
            $.each(data,
                function(i, item){
                    var fila = `
                            <tr vertical-align="middle" style="border: 1px solid black;">
                                <td style="border: 1px black">
                                    <img src="${item.image}"  style="width: 100px" &nbsp&nbsp>
                                </td>
                                <td style="border: 1px black">
                                    ${item.title}
                                </td>
                                <td style="border: 1px black">
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

