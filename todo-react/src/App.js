import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoApp from './pages/ToDoApp';
import './'

function App() {
const router = createBrowserRouter([
  {
    path: "/todo",
    element: <TodoApp></TodoApp>
  }
])

  return (
    <div className="App">
      <header className="App-header">
<RouterProvider router={router}></RouterProvider>



    <div className='Container'></div>
        <h1>
          To-Do-List (Again)
        </h1>

    <div className='main-div'>

      {/* --------------------PlaceHolder y Botón--------------------- */}
      <div className='div.izq'>


      </div>
      </div>

      {/* --------------------Contador--------------------- */}
      <div className='div-der'>

<b>
  Tareas completadas
</b>

<div className='circulo'>
  <div id='numero-tareas'>0</div>
</div>
      </div>


      <div id='task-box' ></div>

      </header>
    </div>
  );
}

export default App;
