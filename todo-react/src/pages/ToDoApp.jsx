import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function TodoApp() {


const [listaTareas, setListaTarea] = useState([])
const [inputValue, setInputValue] = useState ("");

function agregarTarea(){

    let listaNueva = [...listaTareas];

    listaNueva.push(
        {
            id: uuidv4(),
            texto: "",
            check: false
        }
    )
setListaTarea(listaNueva);


console.log(listaNueva);
}


function inputChange (event){
setInputValue(event.target.value)
}



return (
<div>
    <button onClick={agregarTarea}>Agregar</button>
</div>




)
}
export default TodoApp;