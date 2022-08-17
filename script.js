const d  = document;
let user = "";
let visits = 0;
const $paragraph = d.getElementById("paragraph")
const $visits = d.querySelector(".visits")


$paragraph.addEventListener("click",(e)=> identificarUsuario(e))


const identificarUsuario = (e)=>{
    let identificate = prompt("Ingrese su Nombre para identificarte")
    
    let newUser =  user = identificate

    localStorage.setItem("user", newUser)
    location.reload()

}


const obtenerUser = ()=>{
   let Nombre = localStorage.getItem("user")
   $paragraph.innerHTML = `<h4>Bienvenid@ ${Nombre || "Anonimo"}</h4>`;
}
obtenerUser()


const contador = ()=>{
if(!localStorage.getItem("visits")){
   localStorage.setItem("visits", visits)
}
 
 visits = +localStorage.getItem("visits")
 const increment = visits + 1;
 localStorage.setItem("visits", increment)

 $visits.innerHTML = `Contador de Visitas:  <h4>${visits}</h4>` 
}
contador()

