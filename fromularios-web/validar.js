const codigo = document.getElementById("code")
const clave = document.getElementById("pass")
const email = document.getElementById("core")
const celular = document.getElementById("phone")
const formulario1 = document.getElementById("formulario1")
const formulario2= document.getElementById("formulario2")
//VALIDACION DE CAMPOS
//SE VALIDAN ALGUNOS CAMPOS DE LOS FORMULARIOS
formulario1.addEventListener("submit",e=>{ 
    if(nam.value.length<1){
        alert("EL CAMPO NOMBRE ESTA VACIO")
        e.preventDefault()
    }
})

formulario2.addEventListener("submit",e=>{
    if(codigo.value.length<1){
        alert("El codigo no puede estar en blanco")
        e.preventDefault()
    }
})
formulario1.addEventListener("submit",e=>{
    if(clave.value.length<1){
        alert("Por favor el campo clave no puede estar en vacio")
        e.preventDefault()
    }
})
formulario2.addEventListener("submit",e=>{
    if(email.value.length<1){
        alert("El email no puede estar en blanco")
        e.preventDefault()
    }
})
formulario2.addEventListener("submit",e=>{
    if(celular.value.length!=10){
        alert("EL TELEFONO DEBE TENER AL MENOS 10 NUMEROS")
        e.preventDefault()
    }
})






