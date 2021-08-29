import React, { useState } from 'react'
import './style.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const KeepApps = () => {
    const [addItem,setAddItem]=useState([]);

    const addNote=(note)=>{
        // alert("Note added");
        setAddItem((prevData)=>{
            return [...prevData, note];
        });
        // console.log(note);
    }

    const onDelete=(id)=>{
        setAddItem((oldData)=>{
            oldData.filter((curData,ind)=>{
                return ind!==id;
            });
        });
    }

    return (
        <>
            <Header/> 
            <CreateNote sendNote={addNote} /> 

            {addItem.map((val,index)=>{
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                )
            })}

            <Footer/>   
        </>
    )
}

export default KeepApps;