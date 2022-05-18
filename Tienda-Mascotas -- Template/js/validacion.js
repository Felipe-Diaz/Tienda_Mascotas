$("#editProducto").validate(
    {
        "rules":
        {
            "txtIDProducto":
            {
                required: true
            },
            "txtNombreProducto":
            {
                required: true,
            },
            "txtDescripcionProducto":
            {
                required: true
            },
            "txtPrecioProducto":
            {
                required: true,
                min: 1
            },
            "descuentoProductoSus":
            {
                required: true,
                min: 1
            },
            "ofertaProducto":
            {
                required: true,
                min: 0
            }
        },
        messages:
        {
            "txtIDProducto":
            {
                required: 'Este campo es obligatorio'
            },
            "txtNombreProducto":
            {
                required: 'Este campo es obligatorio',
            },
            "txtDescripcionProducto":
            {
                required: 'Este campo es obligatorio'
            },
            "txtPrecioProducto":
            {
                required: 'Este campo es olbigatorio',
                min: 'El precio debe ser mínimo 1'
            },
            "descuentoProductoSus":
            {
                required: 'Este campo es obligatorio',
                min: 'Este valor debe ser mínimo 1'
            },
            "ofertaProducto":
            {
                required: 'Este campo es obligatorio (Si no desea colocar oferta coloque 0)',
                min: 'Debe ser un valor mayor o igual a 0'
            }
        }
    }
)


$("#idRegistro").validate(
    { 
        "rules": 
            {
                "txtNombre":
                    {
                        required: true
                    },
                "txtApellido":
                    {
                        required: true
                    },
                "txtEmail": 
                    {
                        required: true,
                        email: true
                    },
                "txtRut":
                    {
                        required: true,
                        maxlength: 10
                    },
                "txtDireccion":
                    {
                        required: true
                    },
                "txtContrasena":
                    {
                        required: true,
                        minlength: 8
                    },
                "txtRContrasena":
                    {
                        required: true,
                        minlength: 8,
                        equalTo:"#txtContrasena"
                    }
            }, // --> Fin de reglas
        messages: 
            {
                "txtNombre":
                {
                    required: 'El nombre es un campo obligatorio'
                },
                "txtApellido":
                    {
                        required: 'Este es un campo obligatorio'
                    },
                "txtEmail": 
                    {
                        required: 'El email es un campo requerido',
                        email: 'El email no cumple el formato de un correo'
                    },
                "txtTelefono":
                    {
                        required: 'El telefono es un campo obligatorio',
                        minlength: 'Debe ingresar su telefono móvil más el 9',
                        maxlength: 'Debe ser un número de telefono, no más de 9 valores'
                    },
                "txtRegion":
                    {
                        required:'La region es un campo obligatorio'
                    },
                "txtRut":
                    {
                        required: 'El RUT es un campo obligatorio',
                        maxlength: 'El rut debe tener como máximo 10 caracteres (SIN puntos y CON guion)'
                    },
                "txtDireccion":
                    {
                        required: 'Debe ingresar su dirección'
                    },
                "txtContrasena":
                    {
                        required: 'Debe ingresar su contraseña',
                        minlength: 'Debe tener como mínimo 8 caracteres'
                    },
                "txtRContrasena":
                    {
                        required: 'Debe repetir su contraseña',
                        minlength: 'Debe tener como mínimo 8 caracteres',
                        equalTo: 'Debe ser la misma contraseña ingresada anteriormente'
                    }
            },
    }
);

$("#idLogin").validate(
    { 
        "rules": 
            {
                "txtEmail": 
                    {
                        required: true,
                        email: true,
                        minlength:1
                    },
                "txtContrasena":
                    {
                        required: true,
                        minlength: 8
                    }
            }, // --> Fin de reglas
        messages: 
            {
                "txtEmail": 
                    {
                        required: 'El email es un campo requerido',
                        email: 'El email no cumple el formato de un correo',
                        minlength: 'Debe tener como mínimo 1 caracteres'
                    },
                "txtContrasena":
                    {
                        required: 'Debe ingresar su contraseña',
                        minlength: 'Debe tener como mínimo 8 caracteres'
                    }
            },
    }
);

$("#idUser").validate(
    { 
        "rules": 
            {
                "txtNombre":
                    {
                        required: true
                    },
                "txtApellido":
                    {
                        required: true
                    },
                "txtEmail": 
                    {
                        required: true,
                        email: true
                    },
                "txtTelefono":
                    {
                        required: true,
                        minlength: 9,
                        maxlength: 9
                    },
                "txtRut":
                    {
                        required: true,
                        maxlength: 10
                    },
                "txtDireccion":
                    {
                        required: true
                    }
            }, // --> Fin de reglas
        messages: 
            {
                "txtNombre":
                    {
                        required: 'El nombre es un campo obligatorio'
                    },
                "txtApellido":
                    {
                        required:'El apellido es un campo obligatorio'
                    },
                "txtEmail": 
                    {
                        required: 'El email es un campo requerido',
                        email: 'El email no cumple el formato de un correo'
                    },
                "txtTelefono":
                    {
                        required: 'El telefono es un campo obligatorio',
                        minlength: 'Debe ingresar su telefono móvil más el 9',
                        maxlength: 'Debe ser un número de telefono, no más de 9 valores'
                    },
                "txtRut":
                    {
                        required: 'El RUT es un campo obligatorio',
                        maxlength: 'El rut debe tener como máximo 10 caracteres (SIN puntos y CON guion)'
                    },
                "txtDireccion":
                    {
                        required: 'Debe ingresar su dirección'
                    }
            },
    }
);

$("#StockProducto").validate(
    {
        "rules":
            {
                "txtIDStock": 
                    {
                        required: true,
                        min: 20
                    },
                "txtStockProdEspecifico":
                    {
                        required: true,
                        min: 1
                    },
            },
        messages:
            {
                "txtIDStock":
                    {
                        required: 'Este valor es obligatorio',
                        min: 'No debe tener una ID anterior'
                    },
                "txtStockProdEspecifico":
                    {
                        required: 'Este valor es obligatorio',
                        min: 'Debe ser 1 o mayor'
                    }
            }

    }
)

$("#idContact").validate(
    { 
        "rules": 
            {
                "txtNombre":
                    {
                        required: true
                    },
                "txtEmail": 
                    {
                        required: true,
                        email: true
                    },
                "txtTema":
                    {
                        required: true,
                        maxlength: 50
                    },
                "txtMensaje":
                    {
                        required: true,
                        minlength: 30,
                        maxlength: 350
                    },
            }, // --> Fin de reglas
        messages: 
            {
                "txtNombre":
                {
                    required: 'El nombre es un campo obligatorio'
                },
                "txtEmail": 
                    {
                        required: 'El email es un campo requerido',
                        email: 'El email no cumple el formato de un correo'
                    },
                "txtTema":
                    {
                        required:'El tema es un campo obligatorio'
                    },
                "txtMensaje":
                    {
                        required: 'El mensaje es un campo obligatorio',
                        minlength: 'El mensaje debe tener como minimo 30 caracteres'
                    },
            },
    }
);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Valida el rut con su cadena completa "XXXXXXXX-X"
function validateRut(rutCompleto) {
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var rut = tmp[0];
    var digv = tmp[1]; 
    if (digv == 'k') digv = 'K' ;
    return (dv(rut) == digv );
}

function dv(T) {
    var M=0,S=1;
    for(; T; T = Math.floor(T/10))
        S=(S + T % 10 * (9 - M++ %6))%11;
    return S?S-1:'k';
}

// Uso de la función validateRut
// alert( Fn.validateRut('16560241-2') ? 'válido' : 'inválido');

$.validator.addMethod(
    "validateemail",
    function(value, element, validate) {
        debugger
        if (validate) {
            return validateEmail(value);
        }
    },
    "Formato de correo incorrecto"
);

$.validator.addMethod(
    "onenumber",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[0-9].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos un número"
);

$.validator.addMethod(
    "onemayus",
    function(value, element, validate) {
        if (validate) {
            var re = new RegExp('.*[A-Z].*');
            resp = re.test(value);
            return resp;
        }
    },
    "La contraseña debe contener al menos una mayúscula"
);

$.validator.addMethod(
    "rut",
    function(value, element, validate) {
        if (validate) {
            return validateRut(value);
        }
    },
    "El formato del rut no es válido"
);

$("#txtRut").rules("add", { rut: true });
$("#txtEmail").rules("add", { validateemail: true });
$("#txtContrasena").rules("add", { onenumber: true });
$("#txtContrasena").rules("add", { onemayus: true });
