import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoApp from './pages/ToDoApp/ToDoApp';
// import Tasks from './components/task/Tasks';






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

    <div className='main-div'>




<div className=''></div>

</div>


      </header>
    </div>
  );
}

export default App;
