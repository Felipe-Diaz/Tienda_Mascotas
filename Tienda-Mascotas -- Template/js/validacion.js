$('#idRegistro').validate(
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
                "txtTelefono":
                    {
                        required: true,
                        minlength: 9,
                        maxlength: 9
                    },
                "txtRegion":
                    {
                        required: true
                    },
                "txtRut":
                    {
                        required: true,
                        minlength: 11,
                        maxlength: 15
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
                        minlength: 'El rut debe estar entre 11 y 15 valores (SIN puntos y CON guion)',
                        maxlength: 'El rut debe estar entre 11 y 15 valores (SIN puntos y CON guion)'
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