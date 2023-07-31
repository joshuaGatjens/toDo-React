import React from "react";

function Tasks(props){
    function elimTarea(){
        props.eliminarTarea(props.id)
    }
    return(
    <div className="row d-flex flex-row">
        <div className="col">
        <div class="content">
  <label class="checkBox">
    <input type="checkbox" id=""  checked={props.checked} onChange={()=> {props.onChange(props.id)}}/>
    <div class="transition"></div>
  </label>
</div>
    {/* <input id="check" className="col" type="checkbox"  checked={props.checked} onChange={()=> {props.onChange(props.id)}}  ></input> */}
    </div>
    <div className="col">
    <p id="text" className="col">{props.texto}</p>
    </div>
    <div className="col">
    <button id="add-button" onClick={elimTarea}>eliminar</button>
    </div>
    </div>
);
};


export default Tasks;