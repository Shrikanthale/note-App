import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
    const [note,setNote]=useState({
        title:"",
        content:"",
    });

    const inputEvent=(event)=>{
        // const name=event.target.name;
        // const value=event.target.value;
        
        //object destructring
        const {name,value}=event.target;
        // console.log(value);

        setNote((prevData)=>{
            // console.log(prevData);
            return {
                ...prevData,
                [name]:value,
            }
        });
        // console.log(note);
    }
    
    const onSubmit=()=>{
        props.sendNote(note);
        setNote({
            title:"",
            content:"",
        })
    }

    return (
        <>
           <div className="main_note">
                <form>
                    <input type="text" value={note.title} onChange={inputEvent} 
                        name="title" placeholder="Title" autoComplete="off"/>

                    <textarea rows="" value={note.content} onChange={inputEvent} column="" 
                        name="content" placeholder="Write note here..."/>

                    <Button onClick={onSubmit}>
                        <AddIcon className="plus_sign"/>
                    </Button>
                </form>
           </div> 
        </>
    )
}

export default CreateNote;