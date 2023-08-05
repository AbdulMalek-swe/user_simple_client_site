import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../apiService/axios'
import { fetchNotes } from '../../utils/fetchNotes';
const Note = () => {
        const notes = useSelector(state=>state.reducer.note)
       console.log(notes); 
     const handleClick = async ()=>{
        try {
            const result = await axios.post("/notes",{title:"come to habib",description:"come to habibi"})
            const {status} = result;
               if(status===200){
                fetchNotes()
               }
        } catch (error) {
            
        }
     }   
     let content;
     if(!notes.loading){
        content = <> <button onClick={()=>handleClick()}>test</button> {
            notes.notes.map(item=><h1>
                {item.title}
            </h1>)
          }</>
     }
     else if(notes.loading)
     {
        content = <>loading ...</>
     }
    return (
        <div className='container-sk'>
              {
                content
              }
        </div>
    );
};

export default Note;