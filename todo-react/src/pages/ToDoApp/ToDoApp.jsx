import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Tasks from "../../components/Task/Tasks";
import "./ToDoApp.css";
import { json } from "react-router-dom";


function TodoApp() {


    function getLocalStorage() {
        //localStorage.getItem
        const listaDelStorage = localStorage.getItem("listaTareas");
        const listaConvertida = JSON.parse(listaDelStorage);
        
        return listaConvertida;
    }



const [listaTareas, setListaTarea] = useState(getLocalStorage() ?? []);
const [inputValue, setInputValue] = useState ("");
const [contadorConst, setContadorConst] = useState(0);
const texto = "No hay tareas";

function saveLocalStorage() {
    //localStorage.setItem
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
}



//Es un hook para detetcatr cuando algo cambia
useEffect(()=>{ saveLocalStorage() },[listaTareas])

//Escuchar por primera vez la página cargar
useEffect(()=>{contador()}, [])

// -------------Agregar-------------//
function agregarTarea(){
    let vacio = inputValue.trim()
    let listaNueva = [...listaTareas];
if (vacio === "" || vacio === " "){
    alert("Por favor ingresar una tarea válida");
} else if(repTask()) {
    alert ("No se permiten tareas repetidas,  por favor escribe una nueva")
}else
    listaNueva.push(
        {
            id: uuidv4(),
            texto: inputValue,
            check: false
        }
    )
setListaTarea(listaNueva);
setInputValue("")
console.log(listaNueva);
}

function inputChange (event){
setInputValue(event.target.value)
}

// -----------------------eliminar-----------------------
function eliminar(idTarea){
    let listaNueva = [...listaTareas];
for (let i = 0; i < listaNueva.length; i++) {
    const element = listaNueva[i];
    if (element.id === idTarea ) {
        if (element.check == true) {
            let contar = contadorConst -1
            setContadorConst(contar)
        }
        listaNueva.splice(i,1)
        
    }
}
    setListaTarea(listaNueva);
}


// -----------------------Contador-----------------------
function contador(id) {
    let listaNueva = [...listaTareas];
    let contar = 0;
for (let i = 0; i < listaNueva.length; i++) {
    if(listaTareas[i].id === id){
        listaTareas[i].check = !listaTareas[i].check
    }
    if (listaTareas[i].check == true) {
        contar++;
    } 
    setContadorConst (contar)
    setListaTarea(listaNueva);
    console.log(listaNueva)
}



    console.log(listaNueva);
}

// ---------------------Tarea Repetida--------------------

function repTask(){
    for (let i = 0; i < listaTareas.length; i++) {
        if (listaTareas[i].texto.toUpperCase().trim()===inputValue.toUpperCase().trim()) {
            return true;
        }
    }
    return false;
}

// ------------------------Tecla Enter-------------------------
function botonEnter(event){
    if (event.key === "Enter" || event.keycode === 13) {
        agregarTarea(event);
    }
}

return (
<div>
    <div className="lado-izq">
        <div className="titulo">
    <h1 className="title">To-Do-List (Again 2)</h1>
        </div>
    <input type="text" value={inputValue} onKeyDown={botonEnter} onChange={inputChange}/>
    <button id="add-button" onClick={agregarTarea} onKeyDown={botonEnter}>Agregar</button>

    </div>
    <br/>
    <div className="lado-der">
    <h4>
    Tareas completadas
    </h4>

    <div className='circulo'>
    <div id='numero-tareas'>{contadorConst}</div>
    </div>
    </div>

    <div className="taskBox">
        
    {
        !listaTareas.length >0 && <p className="nht">{texto}</p>
    }
        
        {listaTareas.map((tarea, indice)=>(
            <li className="centrar">
            <Tasks 
            key={indice} 
            // onClick={agregarTarea}
            // onKeyDown={botonEnter}
            eliminarTarea={eliminar} 
            onChange ={contador}  
            texto = {tarea.texto} 
            checked={tarea.check}
            id ={tarea.id}>
            </Tasks>
            </li>
        ))}
        
    </div>
</div>








)}
export default TodoApp