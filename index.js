// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", validarFormulario);

// let correo = document.getElementById("correo");


// function validarFormulario(e){
//     e.preventDefault();

//     //correo
//     console.log(e.target.children[0].children[1]);
//     if(e.target.children[0].value.includes("1")){
//        let mensaje = document.createElement("div");
//        mensaje.innerHTML = "no es un correo";
//        document.body.append(mensaje);
//     }
// }

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active')
    }
)