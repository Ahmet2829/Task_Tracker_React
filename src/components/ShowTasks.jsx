import React from 'react'
import { GrClose } from 'react-icons/gr'

const ShowTasks = ({ tasks ,setTasks}) => {
  console.log(tasks)


  const delTask = (task)=> {
    const delT = tasks.filter((e)=> !(e.id===task.id))
    setTasks(delT)
  }
  const crossOut = (task) => {
 
      var newTask = {...task,isDone: !task.isDone}
  
     setTasks([...(tasks.filter((e)=> !(e.id===task.id))),newTask])

   
  }  
   

  return (
    <div>
      <div className="ShowTask">
        <div className="ShowTask">
          {tasks.map((task) => {
            return (
              <div key={task.id} className="ShowTaskItem">                
                <div style={{textDecoration: task.isDone?'line-through':'none'}} 
                 onClick={()=> crossOut(task)} className="task-desc">
                  <h2 className="task-title">{task.task}</h2>
                  <p className="task-date">{task.day}</p>
                </div>

                <div className="task-close">
                  <GrClose onClick={()=> delTask(task)} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ShowTasks




















































// import React from 'react'
// import { GrClose } from 'react-icons/gr'

// const ShowTasks = ({ tasks ,setTasks}) => {
//   console.log(tasks)


//   const delTask = (task)=> {
//     const delT = tasks.filter((e)=> !(e.id===task.id))
//     setTasks(delT)
//   }
//   const crossOut = (task) => {
 
//       var newTask = {...task,isDone: !task.isDone}
  
//      setTasks([...(tasks.filter((e)=> !(e.id===task.id))),newTask])

   
//   }  
   

//   return (
//     <div>
//       <div className="">
//         <div className="">
//           {tasks.map((task) => {
//             return (
//               <div key={task.id} className="task h3">
//                 <div style={{textDecoration: task.isDone?'line-through':'none'}} 
//                  onClick={()=> crossOut(task)} className="">
//                   <h2 className="task h3">{task.task}</h2>
//                   <p className="task h3">{task.day}</p>
//                 </div>

//                 <div className="">
//                   <button className="delBtn" onClick={()=> delTask(task)}>Delete</button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShowTasks
