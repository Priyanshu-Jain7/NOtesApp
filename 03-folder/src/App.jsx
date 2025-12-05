import React, { useState } from 'react';
import {X } from 'lucide-react'

const App = () => {

   const[title,setTitle]=useState('') 
   const[details,setDetails]=useState('')

   const[task,setTask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)


    console.log(title,details);
    setTitle('');
    setDetails('');
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)


  }
 
  

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex flex-col lg:w-1/2 gap-5 items-start p-10 '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* PHELA INPUT HEADING */}
         <input type="text"
         placeholder='Enter Notes Heading' 
         className='px-5 w-full py-2 border-2 rounded'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value); 
         }}
         />
         
         {/* DOSRA INPUT DETAILS */}

        <textarea
        type='text' 
        placeholder="Enter Details" 
        className=' px-5 h-20 w-full py-2 border-2 rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value);
        }}
        /> 
        <button 
         className='bg-purple-600 active:scale-90 active:bg-emerald-700 px-5 py-2  w-full border-0.5 rounded'>Add Notes</button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10 ">
      <h1 className='text-2xl font-bold'>Your Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 h-[90%] overflow-auto mt-5">
        {task.map(function(elem,idx){
           return <div key={idx} className="flex justify-between flex-col relative h-53 w-42 bg-cover rounded-xl text-black px-5 py-7 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
            <div className="relative">
              <h3 className='leading-tight uppercase  font-bold text-lg mt-3'>{elem.title}</h3>
              <p className='mt-4 leading-tight text-xs ' >{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full mb-0 cursor-pointer active:scale-95 border-2 bg-red-500 rounded'>Delete</button>
           
           </div>
        })}
        </div>
      </div>
    </div>
  );
};

export default App;

