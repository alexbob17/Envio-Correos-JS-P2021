//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


// Inicia la funcion
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp); //Carga la funcion Iniciar App al inicio de la aplicacion

    //Campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
}

//Funciones
function iniciarApp(){
   btnEnviar.disable = true;                    //Desabilita el boton enviar
   btnEnviar.classList.add('btnEnviar');        //Agrega la clase que añade opacity y cursor-not-allowed
}


//Valida el formulario

function validarFormulario(e){
    //Valida si el usuario ingreso algo en el input
    if(e.target.value.length > 0){
        console.log('si')
    }else{
        e.target.style.borderBottomColor = 'red'; //Añade una clase border bottom rojo indicando un error
        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){                      //Comprueba si el tipo de value es de tipo Email
        const resultado = e.target.value.indexOf('@');  // y busca si este posee un @
        if(resultado<0){
            mostrarError('El email no es valido');
        }
    }
}

//Mostrando error
function mostrarError(mensaje){
    //Crea un elemento De parrafo con el mensaje definido, Solo se añade la clase para los estilos
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('Mensajeerror');

    const errores = document.querySelectorAll('.Mensajeerror'); // Comprueba cuantas clases de Mensaje Error existen y las selecciona
    if(errores.length === 0){
                                                                //Si los Mensaje Error son igual a 0 osea a 1 este se insertara en el DOM sino este pasa a mostar el error
        formulario.appendChild(mensajeError);
    }
   
}