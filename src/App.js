import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";


function App() {

  const [showAddTask,setShowAddTask] =useState(false)
  
  //tasks array is now part of component
  //state is mutable can't be changed
  //now we can use this tasks in different components also
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Appointment',
        Day: 'Feb 5th at 2:30p.m',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting',
        Day: 'May 5th at 2:30p.m',
        reminder: true,
      },
      {
        id: 3,
        text: 'Shopping',
        Day: 'March 5th at 2:30p.m',
        reminder: false,
      }
    ]
  )


    //add task
    const addTask = (task) => {
      const id=tasks.length + 1
      const newTask = {id,...task}
      setTasks([...tasks,newTask])
    }

    //delete task
    const deleteTask =(id) =>{
      setTasks(tasks.filter((task)=> task.id!==id))
    }

    //toggle reminder 
    const toggleReminder = (id) => {
      setTasks(tasks.map((task)=> 
      
        task.id === id ? {...task,reminder:!task.reminder} : task
      
      ))
    }









  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)}  showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No Tasks to show'}
      
    </div>
  );
}

export default App;
