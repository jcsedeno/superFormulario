const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (valida() == true){
        sendData(form);
    }

})

const sendData = (data) => {
    let xhr;
    if(window.XMLHttpRequest) {
        xhr= new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xhr.open('POST', 'controller.php');
    const formData = new FormData(data);
    xhr.send(formData);
    
}

let valida = true;

function valida() {
    let nombre = document.querySelector('#nombre');
    if (nombre == 0) {
        alert ('El nombre es Obligatorio');
        return;
    }
    let apellidos = document.querySelector('#apellidos');
    if (apellidos == 0) {
        alert ('Los Apellidos son obligatorios');
        return;
    }
    let edad = document.querySelector('#edad');
    if (edad <= 18 ) {
        alert ('Debes ser mayo de 18 años');
        return;
    }
    let gender = document.querySelector('#gender');
    if (gender == '') {
        alert ('Debes marcar si eres otros, mujer u hombre')
    }
    function nif(dni) {
        let numero
        let letr
        let letra
        let expresion_regular_dni
       
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
       
        if(expresion_regular_dni.test (dni) == true){
           numero = dni.substr(0,dni.length-1);
           letr = dni.substr(dni.length-1,1);
           numero = numero % 23;
           letra='TRWAGMYFPDXBNJZSQVHLCKET';
           letra=letra.substring(numero,numero+1);
          if (letra!=letr.toUpperCase()) {
             alert('Dni erroneo, la letra del NIF no se corresponde');
           }else{
             alert('Dni correcto');
           }
        }else{
           alert('Dni erroneo, formato no válido');
         }
      }
      function validarEmail(valor) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
         alert("La dirección de email " + valor + " es correcta.");
        } else {
         alert("La dirección de email es incorrecta.");
        }
      }
      let texto = document.getElementById('#texto')

};